"use server";
import nodemailer from "nodemailer";
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
    const mailOptions = {
      from:formData.get("email") ,
      to:"auxload.official@gmail.com",
      subject: `Mesaj de la ${formData.get("email")}`,
      text: formData.get("message"),
    }; 
     return await transporter.sendMail(mailOptions);
     
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
