import Image from "next/image";
import hero from "../../public/assets/Fitness-woman.png";
import { Button } from "../ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
export const HeroSec = () => {
  return (
    <section className="container  h-[82vh] w-full md:grid grid-cols-2">
      <div className=" justify-center   flex flex-col  gap-3">
        <h3 className="mt-4 text-center md:text-start md:mt-0 text-5xl md:text-7xl font-bold">
          Devino cea mai buna <span className="text-primary">VARIANTA</span>
        </h3>
        <div>

        </div>
        {/* <span>Incepe de azi ,nu in ianuarie :)</span> */}
        <div className="mt-3 flex gap-2 justify-center md:justify-start">   
          <Link href={"#abonamente"}>
            <Button>Vezi abonamentele</Button>
          </Link>
          <Link href={'/#about'}>
            <Button variant={"outline"}>Despre Noi</Button>
          </Link>
        </div>
      </div>
      <div className=" p-4  overflow-hidden  flex justify-center">
        <Image
          className="max-w-full  block md:object-contain"
          src={hero}
          alt="sex"
        />
      </div>
    </section>
  );
};
