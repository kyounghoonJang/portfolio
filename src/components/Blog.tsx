import { getRecentPosts } from "@/lib/blog";
import { profile } from "@/data/portfolio";

export async function Blog() {
  const posts = await getRecentPosts(5);
  if (posts.length === 0) return null;

  return (
    <div>
      <ul className="divide-y divide-border">
        {posts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-foreground transition-colors group-hover:text-accent">
                {post.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {post.date}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={profile.blog}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
      >
        전체 글 보기 →
      </a>
    </div>
  );
}
