"use client";

import { motion } from "motion/react";
import { openSource } from "@/data/portfolio";

export function OpenSource() {
  return (
    <div className="space-y-6">
      {openSource.map((item, i) => (
        <motion.div
          key={item.project}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="rounded-xl border border-border bg-card p-5"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-accent"
            >
              {item.project} <span className="text-muted">↗</span>
            </a>
            <ul className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-1 text-sm text-muted">{item.blurb}</p>

          <ul className="mt-4 space-y-2">
            {item.prs.map((pr) => (
              <li key={pr.url} className="flex items-start gap-2.5 text-sm">
                <span
                  className={`mt-0.5 shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[10px] font-medium ${
                    pr.merged
                      ? "bg-accent/15 text-accent"
                      : "bg-border text-muted"
                  }`}
                >
                  {pr.merged ? "MERGED" : "OPEN"}
                </span>
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-muted transition-colors hover:text-foreground"
                >
                  {pr.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
