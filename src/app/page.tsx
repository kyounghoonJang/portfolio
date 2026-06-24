import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { OpenSource } from "@/components/OpenSource";
import {
  profile,
  skills,
  projects,
  sideProjects,
  education,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />

        <Section id="about" title="About">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="opensource" title="Open Source">
          <OpenSource />
        </Section>

        <Section id="projects" title="Projects">
          <Projects items={projects} />
        </Section>

        <Section id="side" title="Side Projects">
          <Projects items={sideProjects} />
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-2 font-medium">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-card px-2.5 py-1 font-mono text-xs text-muted ring-1 ring-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="sm:flex sm:gap-8">
                <p className="shrink-0 font-mono text-sm text-muted sm:w-36">
                  {edu.period}
                </p>
                <div>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-base text-muted">
            새로운 기회나 협업 제안은 언제든 환영합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline"
            >
              {profile.email}
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind, deployed on Vercel.
        </div>
      </footer>
    </>
  );
}
