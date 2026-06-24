"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "about", label: "소개" },
  { href: "experience", label: "경력" },
  { href: "projects", label: "프로젝트" },
  { href: "side", label: "사이드" },
  { href: "skills", label: "기술" },
  { href: "education", label: "학력" },
  { href: "contact", label: "연락처" },
];

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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
