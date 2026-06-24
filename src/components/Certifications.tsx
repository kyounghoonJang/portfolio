import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {certifications.map((cert) => (
        <li
          key={cert.name}
          className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-4"
        >
          <div className="min-w-0">
            <p className="font-medium leading-snug">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {cert.name} ↗
                </a>
              ) : (
                cert.name
              )}
            </p>
            <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-muted">
            {cert.date}
          </span>
        </li>
      ))}
    </ul>
  );
}
