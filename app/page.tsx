


import React from "react";
import HeroCarousel from "@/components/hero/HeroCarousel";
import {Abonamente} from "@/components/Abonament/Abonamente";
import { Wellcome } from "@/components/WellcomePage/Wellcome";
import { Galerie } from "@/components/Galerie/Galerie";

const page = () => {
  return (
    <main className="">
      <HeroCarousel/>
      <Wellcome/>
      <Abonamente/>
      <Galerie/>

    </main>
  );
};



export default page;
