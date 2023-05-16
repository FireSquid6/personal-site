import "./Links.css";
import Link, { LinkProps } from "./link/Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const links: LinkProps[] = [
  {
    href: "https://www.linkedin.com/in/jonathan-deiss-716008248/",
    children: <FaLinkedin size="10em" />,
  },
  {
    href: "https://github.com/firesquid6",
    children: <FaGithub size="10em" />,
  },
  {
    href: "mailto:jonathandeiss2006@gmail.com",
    children: <FaEnvelope size="10em" />,
  },
];

export default function Links() {
  return (
    <div className="links" id="links">
      <h2>You can find me on:</h2>
      <div className="links-list">
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            {link.children}
          </Link>
        ))}
      </div>
    </div>
  );
}
