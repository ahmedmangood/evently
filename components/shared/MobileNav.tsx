import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { NavItems } from "./NavItems";

export const MobileNav = () => {
  return (
    <nav className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/assets/icons/menu.svg"}
            alt="menu"
            height={25}
            width={25}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src={"assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
