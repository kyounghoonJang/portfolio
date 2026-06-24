import Image from "next/image";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent"
        >
          <div className="relative aspect-video w-full bg-border/40">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-sm text-muted">
                {project.title}
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Live →
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Code →
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
