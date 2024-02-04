import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export const Abonamente = () => {
  return (
    <section
      id="abonamente"
      className=" container  min-h-screen w-full flex flex-col gap-3  p-8 items-center justify-center"
    >
      <h1 className="mb-12 text-5xl text-center ">
        Alege planul care ti se potriveste
      </h1>
      {/* <span>Abonamentele se fac la recepție și accesul în sală se face doar pe bază de cartelă</span> */}
      <div className="grid  md:grid-cols-3 gap-5 ">
        <Card className="min-w-[350px] md:min-w-0 shadow-lg hover:-translate-y-8 transition-transform">
          <CardHeader>
            <CardTitle className="text-md  font-bold ">Elev/Student</CardTitle>
            <CardDescription>O luna</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-4xl  text-primary">
              80 Lei
            </CardDescription>

            <ul className="mt-6">
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Acces timp de o luna</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Program Flexibil</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Ambient Placut</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Echipament minimalist</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Afla mai multe</Button>
          </CardFooter>
        </Card>
        <Card className="min-w-[350px] md:min-w-0 shadow-lg hover:-translate-y-8 transition-transform">
          <CardHeader>
            <CardTitle className="text-md  font-bold ">Adult</CardTitle>
            <CardDescription>O luna</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-4xl  text-primary">
              125 Lei
            </CardDescription>

            <ul className="mt-6">
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Acces timp de o luna</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Program Flexibil</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Ambient Placut</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Echipament minimalist</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Afla mai multe</Button>
          </CardFooter>
        </Card>
        <Card className="min-w-[350px] md:min-w-0 shadow-lg hover:-translate-y-8 transition-transform">
          <CardHeader>
            <CardTitle className="text-md  font-bold ">Anual</CardTitle>
            <CardDescription>Un an</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-4xl  text-primary">
              1400 Lei
            </CardDescription>

            <ul className="mt-6">
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Acces timp de o luna</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Program Flexibil</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Ambient Placut</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 text-primary" />
                <span>Echipament minimalist</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Afla mai multe</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
