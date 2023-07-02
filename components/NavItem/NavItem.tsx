"use client";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname();
  return (
    <div>
      <a href={href} className={`${pathname === href ? "underline" : ""}`}>
        {label}
      </a>
    </div>
  );
}
