"use client";

import type { ComponentProps } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// <Link href="" />
// tailwind-merge, clsx

// type Props = LinkProps & { children: string };
type Props = ComponentProps<typeof Link>;

export const NavLink = ({ href, children, ...rest }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link href={href} {...rest} className={isActive ? "text-red-600" : ""}>
      {children}
    </Link>
  );
};
