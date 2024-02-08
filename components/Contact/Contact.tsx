"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const formSchema = z.object({
  firstName: z.string().min(1,"Te rugam sa introduci numele").max(50,"Limita maxima este de 50 de caractere"),
  lastName: z.string().min(1,"Te rugam sa introduci prenumele").max(50,"Limita maxima este de 50 de caractere"),
  email: z.string().email("Email-ul nu este valid").min(1,"Te rugam sa introduci o adresa de email").max(50),
  message: z.string().min(1,"Introdu mesaj aici").max(225),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { sendEmail } from "../Galerie/actions/SendEmail";
import { useFormStatus } from "react-dom";
import { useRef } from "react";

type x = z.infer<typeof formSchema>;
export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(data: any) {
    await sendEmail(objectToFormData(data));
    form.reset()
  }
  function objectToFormData(obj: any) {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
    return formData;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
        className="  grid md:w-[350px] m-auto grid-cols-2 items-start gap-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nume</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Introdu numele tau</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prenume</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Introdu prenumele tau.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Introdu o adressa email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit" className=" items-start w-fit">
          {(form.formState.isSubmitting) ? "In curs de trimitere..." : "Trimite"}
        </Button>
      </form>
    </Form>
  );
}
