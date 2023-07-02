import { navItems } from "./nav-items";
import { NavItem } from "@/components/NavItem/NavItem";

export default function Header() {
  return (
    <header>
      <h1>firesquid</h1>
      <nav>
        {navItems.map((item, i) => (
          <NavItem key={i} label={item.label} href={item.href} />
        ))}
      </nav>
    </header>
  );
}
