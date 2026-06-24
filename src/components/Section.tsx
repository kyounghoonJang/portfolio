export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-16">
      <h2 className="mb-8 text-sm font-mono uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
