import img from "../../public/assets/sala_7.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Wellcome = () => {
  return (
    <section id="about" className=" container h-screen w-full  flex flex-col ">
      <div className="grid md:grid-cols-2 md:gap-8  w-full h-full">
      <div className=" flex overflow-hidden justify-center items-center ">
          <Image
            className=" object-cover w-full rounded-md h-[250px] md:h-[350px]  "
            src={img}
            alt="sd"
          />
        </div>
        <div className="max-w-[50ch] text-center md:text-start h-full m-auto justify-start md:justify-center items-center md:items-start flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold  md:mt-0 ">
            Cine suntem?
          </h2>
          <p>
            Bine ai venit la Allure Gym.Aici, credem cu tărie că oricine poate
            obține rezultate semnificative, cu efort și dorință autentică.
          </p>
          <p>
            Alătură-te comunității noastre.Fii pregătit să-ți sculptezi corpul
            și să-ți depășești limitele
          </p>
          <Link href={"/contact"}>
            <Button className="">Contacteaza-ne</Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
