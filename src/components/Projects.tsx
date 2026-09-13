"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { projects, type Project } from "@/data/portfolio";
import { AxelDiagram } from "./AxelDiagram";

export function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  // 아직 내용이 없는 카드는 자리만 차지하고 클릭되지 않습니다.
  if (!project.title) {
    return <div className="min-h-44 rounded-xl border border-border bg-card" />;
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => dialog.current?.showModal()}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        whileHover={{ y: -4 }}
        className="flex min-h-44 flex-col rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-accent"
      >
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-0.5 font-mono text-xs text-muted">{project.org}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
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
        <span className="mt-3 text-sm font-medium text-accent">자세히 →</span>
      </motion.button>

      <dialog
        ref={dialog}
        onClick={(e) => {
          // 카드 바깥(백드롭)을 누르면 닫습니다.
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto w-[min(42rem,92vw)] rounded-xl border border-border bg-card p-0 text-foreground backdrop:bg-black/60"
      >
        <div className="max-h-[80vh] overflow-y-auto p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-0.5 font-mono text-xs text-muted">
                {project.org}
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="닫기"
              className="shrink-0 rounded-md border border-border px-2 py-1 text-sm text-muted hover:bg-card-hover hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {(
            [
              ["문제", project.problem],
              ["한 일", project.work],
            ] as const
          ).map(([label, body]) => (
            <div key={label} className="mt-5">
              <h4 className="text-sm font-medium">{label}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}

          {project.consideration && project.consideration.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-medium">설계에서 고려한 점</h4>
              <div className="mt-1 space-y-2.5 text-sm leading-relaxed text-muted">
                {project.consideration.map((c, i) => (
                  <p key={i}>{c}</p>
                ))}
              </div>
            </div>
          )}

          {project.diagram === "axel" && <AxelDiagram />}

          {project.details && project.details.length > 0 && (
            <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-muted">
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
