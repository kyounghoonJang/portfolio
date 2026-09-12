import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div key={exp.company + exp.period} className="sm:flex sm:gap-8">
          <p className="mb-2 shrink-0 font-mono text-sm text-muted sm:w-36 sm:pt-1">
            {exp.period}
          </p>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">
              {exp.company}{" "}
              <span className="font-normal text-muted">· {exp.role}</span>
            </h3>
            <p className="mt-1 text-sm text-muted">{exp.summary}</p>

            {exp.details.map((section) => (
              <div key={section.group} className="mt-5">
                <h4 className="text-sm font-medium">{section.group}</h4>
                <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
