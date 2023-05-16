export interface ExperienceItem {
  type: "education" | "work";
  description: string;
  date: string;
  link: string;
}

export default function ExperienceItem({
  type,
  description,
  date,
  link,
}: ExperienceItem) {
  const color = type === "education" ? "var(--orange)" : "var(--blue)";

  return (
    <a
      href={link}
      className="experience-item"
      style={{
        color: color,
        border: `1px solid ${color}`,
      }}
    >
      <div className="experience-item__description">{description}</div>
      <div className="experience-item__date">{date}</div>
    </a>
  );
}
