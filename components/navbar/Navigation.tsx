"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = ({
  className,
  flex,
}: {
  className?: string;
  flex?: "flex-col " | "flex-row";
}) => {
  return (
    <NavigationMenu className={cn("max-w-none  justify-center ", className)}>
      <NavigationMenuList className={cn(" w-full  flex-wrap gap-2", flex)}>
        <Link
          href={"/"}
          className={navigationMenuTriggerStyle()}
        >
          Acasa
        </Link>
        <Link href={"/#about"} className={navigationMenuTriggerStyle()}>
          Despre noi
        </Link>
        <Link href={"/#abonamente"} className={navigationMenuTriggerStyle()}>
          Abonamente
        </Link>
        <Link href={"/contact"} className={navigationMenuTriggerStyle()}>
          Contact
        </Link>
       
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
