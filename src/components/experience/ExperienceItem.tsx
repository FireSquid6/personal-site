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
}: ExperienceItem) {
  return (
    <div className="experience-item">
      <div className="experience-item__type">{type}</div>
      <div className="experience-item__description">{description}</div>
      <div className="experience-item__date">{date}</div>
    </div>
  );
}
