import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { NavItems } from "./NavItems";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header>
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-32">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="hidden md:flex">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-center items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
