export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-subheading">{eyebrow}</p> : null}
      <h2>{children}</h2>
    </div>
  );
}
