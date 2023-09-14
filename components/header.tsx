import { NavItem } from "./nav-item"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Posts",
    href: "/posts",
  },
  {
    label: "Github",
    href: "https://github.com/firesquid6",
  },
]
export function Header() {
  return (
    <nav className="flex flex-row bg-bg_dark align-center py-3 sticky top-0 z-10">
      <div className="flex flex-col align-center justify-centerm-2 w-0 opacity-0 md:w-full md:opacity-100 transition-all">
        <h1 className="text-teal transition-all text-5xl cursor-default ml-2">
          firesquid
        </h1>
      </div>
      <nav className="flex flex-row align-center justify-center w-full md:w-auto transition-all">
        {navItems.map((item, i) => (
          <NavItem key={i} label={item.label} href={item.href} />
        ))}
      </nav>
    </nav>
  )
}
