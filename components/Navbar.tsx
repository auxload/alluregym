"use client"
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  UserPlus,
} from "lucide-react";
import TopNavigation from "./navbar/TopNavigation";
import Navigation from "./navbar/Navigation";
import { Button } from "./ui/button";
import MobileNavigation from "./navbar/MobileNavigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the value (e.g., 100) based on when you want the change to occur
      setIsScrolled(scrollTop > 3);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <TopNavigation />
        <div className={`${isScrolled ? 'fixed' : 'relative'} backdrop-blur-sm  z-50 top-0 w-full flex justify-between items-center py-4 px-8 `}>
          <Link href={'/'} className="text-xl">
            Allure <span className="font-bold text-primary">GYM</span>
          </Link>
          <Navigation className="hidden md:flex" />
          <Button className="items-center gap-3 hidden md:flex">
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:block">Fa-ti abonament</span>
          </Button>

          <MobileNavigation isScrolled={isScrolled}/>

          {/* <ModeToggle /> */}
          {/* <Menu /> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
