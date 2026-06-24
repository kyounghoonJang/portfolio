import { profile } from "@/data/portfolio";

export type BlogPost = {
  title: string;
  url: string;
  date: string; // "2026.06.06" 형식
};

function decodeXml(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function formatDate(pubDate: string) {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

// Tistory RSS에서 최근 글을 가져옵니다. (Vercel ISR: 1시간마다 갱신)
export async function getRecentPosts(limit = 5): Promise<BlogPost[]> {
  const blog = profile.blog?.replace(/\/$/, "");
  if (!blog) return [];

  try {
    const res = await fetch(`${blog}/rss`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];
    return items
      .map((item) => {
        const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
        const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? "";
        const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "";
        return {
          title: decodeXml(title),
          url: decodeXml(link),
          date: formatDate(decodeXml(pubDate)),
        };
      })
      .filter((p) => p.title && p.url)
      .slice(0, limit);
  } catch {
    return [];
  }
}
