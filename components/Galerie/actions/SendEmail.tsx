"use server";
import nodemailer from "nodemailer";
import { FormEventHandler } from "react";


export const delay = () => {
  return new Promise<void>((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 2000);
      }),
    );
  });
}

export async function sendEmail(formData: FormData) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "gd69435@gmail.com",
        pass: "udpiiemxvtkupnwb",
      },
    });
    const mailOptions:any = {
      from:formData.get("email") ,
      to:"auxload.official@gmail.com",
      subject: `Mesaj de la ${formData.get("email")}`,
      text: formData.get("message"),
    }; 
    // await delay()
    
     
     await transporter.sendMail(mailOptions);
     return
     
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
