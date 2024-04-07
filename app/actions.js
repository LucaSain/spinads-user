"use server";
import { redirect } from "next/navigation";
import { Client } from "node-mailjet";
export async function uploadPicture(formData) {
  console.log("help");
  const picture = formData.get("picture");
  redirect("https://spinads-user.vercel.app/user");
}

export async function triggerBicicleta(formData) {
  console.log("dsfijlhad");
  await fetch(process.env.BE_URL + "/api/bikes/rentbike/AAA-002", {
    headers: {
      Authorization: "Bearer " + process.env.AUTH_TOKEN,
    },
    method: "POST",
  }).then((res) => res.json());
}

export async function Purchase(formData) {
  const price = formData.get("price");
  const name = formData.get("name");
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
        Subject: "Purchase complete at SpinAds",
        TextPart: "Hi! Here's your recent purchase at Spin Ads!",
        HTMLPart:
          "<h3>Dear customer!</h3><br />May the delivery force be with you!" +
          price +
          "\n" +
          name,
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
