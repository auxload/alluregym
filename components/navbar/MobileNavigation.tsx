"use client";
import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import { Menu } from "lucide-react";

const MobileNavigation = ({isScrolled}:{isScrolled:boolean}) => {
  const [open, setOpen] = useState<boolean | false>(false);
  const menuBtnRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  function handleWindowClick(e: MouseEvent) {
    if (menuBtnRef.current && !menuBtnRef.current.contains(e.target as Node)) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }
  return (
    <div className="md:hidden">
      <Menu ref={menuBtnRef} className=" cursor-pointer" />
      <div
        className={`absolute md:hidden ${
          !open && "-translate-y-full"
        } w-full z-40 bg-background transition  ${
          open && "shadow-[0_0px_0px_9999px_rgba(0,0,0,0.7)]"
        }  right-0 ${!isScrolled ? "-top-11" : "top-0"} py-6 h-fit grid  `}
      >
        <Navigation flex="flex-col "  />
      </div>
    </div>
  );
};

export default MobileNavigation;
