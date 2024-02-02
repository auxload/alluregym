import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <div className="w-full border-b text-xs  px-4 py-3 items-center flex gap-4  justify-end ">
      <Link
        href={
          "https://www.google.com/maps/place/Bulevardul+Republicii+21,+Breaza+105400/@45.1752652,25.6668558,17z/data=!3m1!4b1!4m10!1m2!2m1!1sStrada+Republicii+nr.+21,+Breaza+105400!3m6!1s0x40b3015b97da27e1:0x138648946e54e39b!8m2!3d45.1752615!4d25.6714692!15sCidTdHJhZGEgUmVwdWJsaWNpaSBuci4gMjEsIEJyZWF6YSAxMDU0MDCSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11j738h0hc?entry=ttu"
        }
        target="_blank"
        className="flex items-center gap-2"
      >
        <MapPin className="fill-primary w-4 h-4" />
        <span className="hidden sm:block">
          Strada Republicii nr. 21, Breaza
        </span>
      </Link>
      <Link
        href={`mailto:${"gd69435@gmail.com"}?subject=${encodeURIComponent(
          ""
        )}&body=${encodeURIComponent("")}`}
        className="flex items-center gap-2"
      >
        <Mail className="fill-primary w-4 h-4" />
        <span className="hidden sm:block">alluregym@gmail.com</span>
      </Link>
      <Link
        target="_blank"
        href={"https://wa.me/+40737122906"}
        className="flex items-center gap-2"
      >
        <Phone className="fill-primary w-4 h-4" />
        <span className="hidden sm:block">0790.387.550</span>
      </Link>
      <div className="flex gap-4 ml-auto sm:ml-0 items-center">
        <Link
          target="_blank"
          href={
            "https://www.facebook.com/p/Allure-Gym-100063588700042/?locale=ro_RO"
          }
        >
          <Facebook className="w-4 h-4" />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/ivan_george54/"}>
          <Instagram className="w-4 h-4" />
        </Link>

        <ModeToggle />
      </div>
    </div>
  );
};

export default TopNavigation;
