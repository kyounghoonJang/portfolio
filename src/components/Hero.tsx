"use client";

import { motion, type Variants } from "motion/react";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative pt-24 pb-20"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-xl text-muted sm:text-2xl">
          {profile.role}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            프로젝트 보기
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
          >
            연락하기
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
            >
              이력서 (PDF)
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
