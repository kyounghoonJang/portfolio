"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="space-y-10">
      {experiences.map((exp) => (
        <ExperienceItem key={exp.company + exp.period} exp={exp} />
      ))}
    </div>
  );
}

function ExperienceItem({ exp }: { exp: (typeof experiences)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:flex sm:gap-8">
      <p className="mb-2 shrink-0 font-mono text-sm text-muted sm:w-36 sm:pt-1">
        {exp.period}
      </p>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold">
          {exp.role} <span className="font-normal text-muted">· {exp.company}</span>
        </h3>
        <p className="mt-1 text-sm text-muted">{exp.summary}</p>

        {exp.metrics && exp.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-6">
            {exp.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-xl font-bold text-accent">{m.value}</div>
                <div className="text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-4 list-disc space-y-1.5 overflow-hidden pl-5 text-sm text-muted"
            >
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {exp.details.length > 0 && (
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-sm font-medium text-accent hover:underline"
            >
              {open ? "접기 ▲" : "상세 내용 보기 ▼"}
            </button>
          )}
        </div>

        {exp.tags && exp.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
