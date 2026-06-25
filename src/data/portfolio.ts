// ============================================================
//  이 파일만 고치면 포트폴리오 내용이 전부 바뀝니다.
//  (이름, 소개, 스킬, 경력, 오픈소스, 프로젝트, 학력, 자격증, 연락처)
// ============================================================

export const profile = {
  name: "장경훈",
  role: "Infrastructure Engineer",
  tagline:
    "컨테이너·쿠버네티스·클라우드 인프라를 다루며, 오픈소스로 기여하는 인프라 엔지니어입니다.",
  location: "Seoul, Korea",
  email: "owndill19@gmail.com",
  // 비워두면 해당 버튼이 표시되지 않습니다.
  github: "https://github.com/kyounghoonJang",
  linkedin: "",
  blog: "https://codingjang.tistory.com/", // 비워두면 블로그 섹션이 숨겨집니다.
  resumeUrl: "", // PDF 이력서 링크 (예: "/resume.pdf")
  about: [
    "컨테이너, 쿠버네티스, 클라우드 네이티브 인프라에 관심이 많은 인프라 엔지니어입니다. Podman, Cilium, OpenBao 등 핵심 오픈소스 프로젝트에 직접 기여하며 대규모 코드베이스를 읽고 협업하는 경험을 쌓아왔습니다.",
    "여기에 본인을 더 구체적으로 소개하세요 — 어떤 인프라 문제를 즐겨 풀고, 어떤 스택(쿠버네티스/IaC/관측성 등)에 강하며, 앞으로 어떤 인프라 엔지니어가 되고 싶은지로 마무리하면 인상이 좋습니다.",
  ],
};

export type Skill = { category: string; items: string[] };

// ⚠️ 실제로 다룰 수 있는 것만 남기고 자유롭게 수정하세요.
export const skills: Skill[] = [
  { category: "Languages", items: ["Go", "Python", "Bash", "TypeScript"] },
  {
    category: "Containers / Orchestration",
    items: ["Kubernetes", "Docker", "Podman", "Helm"],
  },
  {
    category: "Cloud / IaC",
    items: ["AWS", "Terraform", "Cilium", "Linux"],
  },
  {
    category: "Observability / CI·CD",
    items: ["Prometheus", "Grafana", "GitHub Actions", "ArgoCD"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  // 핵심 성과 — 수치를 강조하면 좋습니다. value가 크게 표시됩니다.
  metrics?: { value: string; label: string }[];
  // "상세 내용 보기"를 누르면 펼쳐지는 내용
  details: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "회사 / 팀 이름",
    role: "Frontend Engineer",
    period: "2023.01 – 현재",
    summary: "이 조직에서 맡았던 역할과 책임을 한 줄로 요약합니다.",
    metrics: [
      { value: "40%", label: "페이지 로드 단축" },
      { value: "18만→20만", label: "MAU 증가" },
    ],
    details: [
      "구체적인 성과를 숫자와 함께 적으면 좋습니다.",
      "어떤 기술/방법으로 어떤 문제를 해결했는지 적습니다.",
      "팀에서 주도한 일이 있다면 강조하세요.",
    ],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "이전 회사 / 프로젝트",
    role: "Frontend Developer",
    period: "2021.06 – 2022.12",
    summary: "또 다른 경력을 추가할 수 있습니다.",
    details: ["주요 업무 1", "주요 업무 2"],
    tags: ["React", "JavaScript"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  // public/ 폴더 기준 경로 (예: "/projects/app.gif" 또는 ".png"). 없으면 placeholder.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "프로젝트 이름 A",
    description:
      "이 프로젝트가 무엇이고, 어떤 문제를 풀었으며, 내가 어떤 부분을 담당했는지 2~3문장으로 설명합니다.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/kyounghoonJang/project-a",
    image: "",
  },
  {
    title: "프로젝트 이름 B",
    description:
      "두 번째 프로젝트 설명. 사용한 기술과 결과(사용자 수, 성능 개선 등)를 적어주세요.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/kyounghoonJang/project-b",
    image: "",
  },
];

// 사이드 프로젝트 (개인/토이 프로젝트)
export const sideProjects: Project[] = [
  {
    title: "사이드 프로젝트",
    description: "개인적으로 만든 토이 프로젝트나 실험적인 작업물을 적습니다.",
    tags: ["React", "Vite"],
    repoUrl: "https://github.com/kyounghoonJang/side-project",
    image: "",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "OO대학교",
    degree: "전공 / 학위",
    period: "2017.03 – 2021.02",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string; // 취득 시기 (예: "2024.08")
  url?: string; // 자격증 검증 링크 (Credly 등). 없으면 링크 미표시.
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "2024.11",
    url: "",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024.03",
    url: "",
  },
  {
    name: "SQL 개발자 (SQLD)",
    issuer: "한국데이터산업진흥원",
    date: "2022.12",
    url: "",
  },
  {
    name: "데이터분석 준전문가 (ADsP)",
    issuer: "한국데이터산업진흥원",
    date: "2022.09",
    url: "",
  },
  {
    name: "네트워크관리사 2급",
    issuer: "한국정보통신자격협회 (ICQA)",
    date: "2020.05",
    url: "",
  },
  {
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회 (KAIT)",
    date: "2019.04",
    url: "",
  },
];

// ============================================================
//  오픈소스 기여
//  PR 목록·스타 수는 scripts/update-contributions.mjs 가 GitHub에서 자동 수집해
//  contributions.generated.json 에 저장합니다. (GitHub Actions가 매일 갱신)
//  아래 openSourceMeta 의 설명/태그/블로그링크만 손으로 큐레이션하세요.
// ============================================================
import contributions from "./contributions.generated.json";

export type OpenSourcePR = {
  title: string;
  url: string;
  merged: boolean;
  note?: string; // 큐레이션된 한 줄 설명 (선택)
};
export type OpenSource = {
  project: string;
  projectUrl: string;
  stars: number;
  blurb: string;
  tags: string[];
  prs: OpenSourcePR[];
  relatedPosts?: { label: string; url: string }[];
};

// repo full name → 큐레이션. 없는 레포는 GitHub 설명/언어로 자동 표시됩니다.
type OpenSourceMeta = {
  displayName?: string;
  blurb?: string;
  tags?: string[];
  relatedPosts?: { label: string; url: string }[];
  notes?: Record<string, string>; // PR url → 한 줄 설명
};

const openSourceMeta: Record<string, OpenSourceMeta> = {
  "traefik/traefik": {
    displayName: "Traefik",
    blurb: "클라우드 네이티브 리버스 프록시 / 로드밸런서",
    tags: ["Go", "Networking", "Proxy"],
  },
  "apache/airflow": {
    displayName: "Apache Airflow",
    blurb: "워크플로우 오케스트레이션 플랫폼 (Apache)",
    tags: ["Python", "Data", "Workflow"],
  },
  "podman-container-tools/podman": {
    displayName: "Podman",
    blurb: "Red Hat의 데몬리스 OCI 컨테이너 엔진",
    tags: ["Go", "Containers", "CLI"],
    notes: {
      "https://github.com/podman-container-tools/podman/pull/28673":
        "삭제 전 어떤 볼륨이 정리될지 미리 보여주는 --dry-run 옵션 추가 (local·remote 모두 지원).",
      "https://github.com/podman-container-tools/podman/pull/28391":
        "존재하지 않는 네트워크 삭제 시 exit 1 대신 success 반환 — Docker CLI와의 동작 일관성 확보 (#28363).",
    },
    relatedPosts: [
      {
        label: "Deep Dive 0편: Podman 아키텍처",
        url: "https://codingjang.tistory.com/89",
      },
      {
        label: "Deep Dive 1편: podman run 은 어떻게 동작할까?",
        url: "https://codingjang.tistory.com/90",
      },
    ],
  },
  "cilium/cilium": {
    displayName: "Cilium",
    blurb: "eBPF 기반 쿠버네티스 네트워킹·보안 (CNCF Graduated)",
    tags: ["Go", "eBPF", "Kubernetes"],
    notes: {
      "https://github.com/cilium/cilium/pull/44383":
        "Multi-Pool IPAM을 위한 CiliumPodIPPool v2 API 신규 추가 — CRD 스키마·검증·codegen 포함 (+1,000여 줄, 16개 파일).",
      "https://github.com/cilium/cilium/pull/41949":
        "Hubble 흐름 관측에 VRRP·IGMP 프로토콜 파싱 지원 추가.",
    },
    relatedPosts: [
      { label: "[Network] VRRP Protocol", url: "https://codingjang.tistory.com/88" },
    ],
  },
  "floci-io/floci": {
    displayName: "floci",
    blurb: "가볍고 무료인 AWS 로컬 에뮬레이터 (LocalStack 대안)",
    tags: ["AWS", "Cloud", "Java"],
  },
  "anchore/syft": {
    displayName: "Syft",
    blurb: "컨테이너 이미지·파일시스템에서 SBOM을 생성하는 도구 (Anchore)",
    tags: ["Go", "SBOM", "Security"],
  },
  "openbao/openbao": {
    displayName: "OpenBao",
    blurb: "HashiCorp Vault 기반 오픈소스 시크릿 관리 (Linux Foundation)",
    tags: ["Go", "Secrets", "Security"],
    notes: {
      "https://github.com/openbao/openbao/pull/1834":
        "리스너별 메트릭 노출 제어 옵션 추가 — 모니터링 전용 포트를 분리해 다른 API 노출 없이 메트릭만 제공 (보안 강화, #1704).",
    },
  },
};

// 생성된 JSON + 큐레이션 메타를 합칩니다.
export const openSource: OpenSource[] = contributions.projects.map((p) => {
  const meta = openSourceMeta[p.repo] ?? {};
  return {
    project: meta.displayName ?? p.repo.split("/")[1],
    projectUrl: p.repoUrl,
    stars: p.stars,
    blurb: meta.blurb ?? p.description,
    tags: meta.tags ?? (p.language ? [p.language] : []),
    prs: p.prs.map((pr) => ({
      title: pr.title,
      url: pr.url,
      merged: pr.merged,
      note: meta.notes?.[pr.url],
    })),
    relatedPosts: meta.relatedPosts,
  };
});
