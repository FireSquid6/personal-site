import "../../../palette.css";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link"
      style={{
        transition: "all 0.2s ease-in-out",
        color: "var(--text-color)",
        textDecoration: "none",
        margin: "0",
        textAlign: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--green)";
        e.currentTarget.style.transform = `scale(1.2)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-light)";
        e.currentTarget.style.transform = `scale(1)`;
      }}
    >
      {children}
    </a>
  );
}
