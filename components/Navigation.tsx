"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((button) => {
        const isActive = pathname === button.href;
        return (
          <Link
            key={button.label}
            href={button.href}
            className={isActive ? "button_active" : "button"}
          >
            {button.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
