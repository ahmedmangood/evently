"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex flex-col md:flex-row w-full gap-5 items-start">
      {headerLinks.map((linkItem) => {
        const isActive = pathname === linkItem.route;
        return (
          <li
            key={linkItem.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={linkItem.route}>{linkItem.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
