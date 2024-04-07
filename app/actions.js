"use server";
import { redirect } from "next/navigation";
import { Client } from "node-mailjet";
export async function uploadPicture(formData) {
  console.log("help");
  const picture = formData.get("picture");
  redirect("https://spinads-user.vercel.app/");
}

export async function Purchase(formData) {
  console.log("no way");
  const mailjet = new Client({
    apiKey: process.env.MAILJET_API_PUBLIC_KEY,
    apiSecret: process.env.MAILJET_API_PRIVATE_KEY,
  });
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "lucasainenco2@gmail.com",
          Name: "luca",
        },
        To: [
          {
            Email: "lucasainenco2@gmail.com",
            Name: "luca",
          },
        ],
        Subject: "Greetings from Mailjet.",
        TextPart: "My first Mailjet email",
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
  redirect("https://spinads-user.vercel.app/");
}
