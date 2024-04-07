"use server";
import { redirect } from "next/navigation";
export async function uploadPicture(formData) {
  console.log("help");
  const picture = formData.get("picture");
  redirect("https://spinads-user.vercel.app/");
}
