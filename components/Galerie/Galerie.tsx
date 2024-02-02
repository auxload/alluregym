import React from "react";
import {data} from './index'
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

export const Galerie = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-start">
      {
        data.map(img => (
          <AlbumItem key={2} src={img}/>
        ))
      }
    </div>
  );
};



export const AlbumItem = ({src}:{src: StaticImageData}) => {
  return (
    <Dialog >
      <DialogTrigger className="max-w-none w-full h-full ">
        <Image className="overflow-hidden object-cover w-full h-full transition-transform rounded-md hover:-translate-y-2" src={src} alt="s" />
      </DialogTrigger>
      <DialogContent className=" overflow-hidden  max-w-none w-[90%] h-[90%]   items-center justify-center">
        <Image className="w-full h-full object-cover overflow-hidden" src={src} alt="s" />
      </DialogContent>
    </Dialog>
  )
}
