"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "about", label: "소개" },
  { href: "experience", label: "경력" },
  { href: "opensource", label: "오픈소스" },
  { href: "projects", label: "프로젝트" },
  { href: "side", label: "사이드" },
  { href: "skills", label: "기술" },
  { href: "blog", label: "블로그" },
  { href: "education", label: "학력" },
  { href: "certifications", label: "자격증" },
];

const iconBtn =
  "rounded-md border border-border p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground";

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden gap-1 text-sm md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  className={`rounded-md px-2.5 py-1.5 transition-colors ${
                    active === link.href
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.81 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.51.12-3.15 0 0 1-.31 3.3 1.2.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.28-1.51 3.29-1.2 3.29-1.2.65 1.64.24 2.85.12 3.15.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56C20.57 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z" />
              </svg>
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className={iconBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
