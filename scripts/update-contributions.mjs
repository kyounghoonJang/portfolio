// ============================================================
//  GitHub에서 내 오픈소스 PR을 수집해 contributions.generated.json 으로 저장합니다.
//  - 스타 STAR_THRESHOLD 이상인 레포만
//  - merged 또는 open 상태인 PR만 (closed-unmerged 제외)
//
//  실행: GITHUB_TOKEN=$(gh auth token) node scripts/update-contributions.mjs
//  (GitHub Actions에서는 GITHUB_TOKEN이 자동 주입됩니다.)
// ============================================================

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const USERNAME = "kyounghoonJang";
const STAR_THRESHOLD = 5000;

// 스타가 충분해도 목록에서 빼고 싶은 레포 (full name). 여기에 추가만 하면 됩니다.
const EXCLUDE_REPOS = new Set([
  "anchore/syft",
]);

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "..", "src", "data", "contributions.generated.json");

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("GITHUB_TOKEN 환경변수가 필요합니다. (로컬: GITHUB_TOKEN=$(gh auth token) node ...)");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function gh(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  return res.json();
}

// 1. 내가 작성한 PR 전부 검색 (페이지네이션)
async function fetchAuthoredPRs() {
  const items = [];
  let page = 1;
  for (;;) {
    const q = encodeURIComponent(`author:${USERNAME} type:pr`);
    const data = await gh(
      `https://api.github.com/search/issues?q=${q}&per_page=100&page=${page}`
    );
    items.push(...data.items);
    if (items.length >= data.total_count || data.items.length === 0) break;
    page += 1;
  }
  return items;
}

// 2. 레포 메타(스타/설명/언어) 조회 — 레포당 1회 캐시
const repoCache = new Map();
async function getRepo(repoApiUrl) {
  if (repoCache.has(repoApiUrl)) return repoCache.get(repoApiUrl);
  const r = await gh(repoApiUrl);
  const info = {
    fullName: r.full_name,
    htmlUrl: r.html_url,
    stars: r.stargazers_count,
    description: r.description ?? "",
    language: r.language ?? "",
  };
  repoCache.set(repoApiUrl, info);
  return info;
}

async function main() {
  const prs = await fetchAuthoredPRs();
  const byRepo = new Map();

  for (const pr of prs) {
    const merged = Boolean(pr.pull_request?.merged_at);
    const isOpen = pr.state === "open";
    // merged 또는 open 만 포함 (closed-unmerged 제외)
    if (!merged && !isOpen) continue;

    const repo = await getRepo(pr.repository_url);
    if (repo.stars < STAR_THRESHOLD) continue;
    if (EXCLUDE_REPOS.has(repo.fullName)) continue;

    if (!byRepo.has(repo.fullName)) {
      byRepo.set(repo.fullName, { repo, prs: [] });
    }
    byRepo.get(repo.fullName).prs.push({
      title: pr.title,
      url: pr.html_url,
      merged,
      state: merged ? "merged" : "open",
      createdAt: pr.created_at,
    });
  }

  const projects = [...byRepo.values()]
    // 레포는 스타 많은 순
    .sort((a, b) => b.repo.stars - a.repo.stars)
    .map(({ repo, prs }) => ({
      repo: repo.fullName,
      repoUrl: repo.htmlUrl,
      stars: repo.stars,
      description: repo.description,
      language: repo.language,
      // PR은 merged 먼저, 그 안에서 최신순
      prs: prs.sort((a, b) => {
        if (a.merged !== b.merged) return a.merged ? -1 : 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      }),
    }));

  const output = {
    generatedAt: new Date().toISOString(),
    username: USERNAME,
    starThreshold: STAR_THRESHOLD,
    projects,
  };

  await writeFile(OUTPUT, JSON.stringify(output, null, 2) + "\n");
  const total = projects.reduce((n, p) => n + p.prs.length, 0);
  console.log(
    `✓ ${projects.length}개 레포, ${total}개 PR 수집 → ${OUTPUT}`
  );
  for (const p of projects) {
    console.log(`  - ${p.repo} (${p.stars}⭐): ${p.prs.length} PRs`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
