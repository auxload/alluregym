"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay"
import { Hero } from './Hero';
import { HeroSec } from './HeroSec';

const HeroCarousel = () => {
  return (
    <Carousel
    plugins={[
      Autoplay({
        delay: 7000,
      }),
    ]}
  >
    <CarouselContent>
      <CarouselItem>
        <Hero />
      </CarouselItem>
      <CarouselItem>
        <HeroSec/>
      </CarouselItem>
      <CarouselItem >
        <div className="grid place-content-center h-full p-6">
          <h1 className="text-6xl">
            Never give up.
            <span className="text-primary">
              Vino si lamureste te
            </span>
          </h1>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious className="ml-16" />
    <CarouselNext className="mr-16" />
  </Carousel>
  )
}

export default HeroCarousel