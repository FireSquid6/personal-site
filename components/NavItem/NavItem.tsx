"use client";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname();
  return (
    <a
      href={href}
      className={`${
        pathname === href
          ? "underline text-orange hover:text-orange"
          : "text-blue hover:text-blue"
      } p-4 mx-2 my-auto bg-black1 rounded-xl hover:bg-dark5 transition-all h-min hover:translate-y-[-4px]`}
    >
      {label}
    </a>
  );
}
