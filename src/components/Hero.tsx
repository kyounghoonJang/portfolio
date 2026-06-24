import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16">
      <p className="mb-3 font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-muted">{profile.role}</p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          프로젝트 보기
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          연락하기
        </a>
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            이력서 (PDF)
          </a>
        )}
      </div>
    </section>
  );
}
