import { navItems } from "./nav-items";
import { NavItem } from "@/components/NavItem/NavItem";

export default function Header() {
  return (
    <header className="flex flex-row bg-bg_dark align-center py-3 sticky top-0">
      <div className="flex flex-col align-center justify-center w-full m-2">
        <h1 className="text-teal hover:text-cyan transition-all text-5xl cursor-default hover:translate-x-4">
          firesquid
        </h1>
      </div>
      <nav className="flex flex-row align-center justify-center">
        {navItems.map((item, i) => (
          <NavItem key={i} label={item.label} href={item.href} />
        ))}
      </nav>
    </header>
  );
}