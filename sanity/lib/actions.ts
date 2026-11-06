"use server";

import * as EmailValidator from "email-validator";
import { ISubmitContactFormData, TFormTypes } from "@/types/types";
import { assertWriteToken, writeClient } from "./writeClient";

/* Server actions — izvrsavaju se samo na serveru, pa write token ostaje tajan. */

type TActionResult = { success: boolean; msg: string };

const FORM_TYPES: TFormTypes[] = ["kontakt", "pokrovitelj", "clanarina"];

/* Newsletter */

export const postNewsletterEmail = async (
  email: string
): Promise<TActionResult> => {
  if (typeof email !== "string" || !EmailValidator.validate(email)) {
    return { success: false, msg: "Email not valid" };
  }

  try {
    assertWriteToken();
    // provjera mora biti svjeza i ne smije pisati u Data Cache; $email kao parametar (bez GROQ injectiona)
    const existingList = await writeClient.fetch(
      `*[_type=='newsletterEmailList' && emailAddress == $email][0]._id`,
      { email },
      { cache: "no-store" }
    );
    if (existingList) {
      return {
        success: false,
        msg: "Email alredy existing in newsletter list",
      };
    }

    await writeClient.create({
      _type: "newsletterEmailList",
      emailAddress: email,
    });
    return { success: true, msg: "Email added 🙂" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      msg: "Something went wrong,please try again.",
    };
  }
};

/* Contact Form */

export const postContactMessage = async (
  submitFormData: ISubmitContactFormData,
  formType: TFormTypes
): Promise<TActionResult> => {
  const { email, name, message } = submitFormData ?? {};
  if (typeof email !== "string" || !EmailValidator.validate(email)) {
    return { success: false, msg: "Email nije validan" };
  }
  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim()
  ) {
    return { success: false, msg: "Nisu sva polja popunjena" };
  }
  if (!FORM_TYPES.includes(formType)) {
    return { success: false, msg: "Neispravan tip forme" };
  }

  try {
    assertWriteToken();
    await writeClient.create({
      _type: "contactMessage",
      email,
      sender: name.slice(0, 200),
      message: message.slice(0, 5000),
      formType,
    });
    return {
      success: true,
      msg: "Poruka poslana,kontaktirat cemo vas prvom prilikom 🙂",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      msg: "Došlo je do greške.Pokušajte ponovno ili nam pošaljite izravnu e-poštu. Hvala vam.",
    };
  }
};
