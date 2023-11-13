"use client";
import { ISubmitContactFormData, TFormTypes } from "@/types/types";
import { validate } from "email-validator";
import React, {
  ReactEventHandler,
  useState,
  FormEvent,
  FormEventHandler,
} from "react";
import { postContactMessage } from "../../../../sanity/lib/queries";

export const ContactForm = ({ formType }: { formType: TFormTypes }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tosAggrement, setTosAggrement] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [idle, setIdle] = useState(false);

  const submitFormHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (message === "" || name === "") {
      setStatusMessage("Popunite sva polja");
      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
      return;
    }
    if (!validate(email)) {
      setStatusMessage("Email nije validan");
      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
      return;
    }
    if (!tosAggrement) {
      setStatusMessage("Potvrdite da ste upoznati sa izjavom o privatnosti.");
      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
      return;
    }
    setIdle(true);
    try {
      const messageData: ISubmitContactFormData = { name, email, message };
      const res = await postContactMessage(messageData, formType);
      setStatusMessage(res.msg);
      if (res.success) {
        setName("");
        setMessage("");
        setTosAggrement(false);
        setEmail("");
      }
    } catch (error) {
      setStatusMessage(
        "Došlo je do greške.Pokušajte ponovo ili nas direktno na mail kontaktirajte.Hvala."
      );
    }
    setTimeout(() => {
      setStatusMessage("");
      setIdle(false);
    }, 4000);
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-full max-w-[1200px] bg-base-300/30  mx-auto flex flex-col gap-[15px] p-[20px] rounded-sm relative"
    >
      <p
        className={`absolute top-[-45px] left-[0] w-full bg-primary text-primary-content ${
          statusMessage !== "" && "p-[10px]"
        }  transition-universal`}
      >
        {statusMessage}
      </p>
      <div className="flex flex-col lg:flex-row  gap-[20px]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Ime i prezime*"
          className="flex-1 form-input"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email*"
          className="flex-1 form-input"
        />
      </div>
      <textarea
        name="message"
        placeholder="Poruka*"
        id=""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        cols={30}
        rows={10}
        className="form-input"
      ></textarea>
      <label htmlFor="confirmTOS" className="flex gap-[10px]">
        <input
          type="checkbox"
          value={String(tosAggrement)}
          checked={tosAggrement}
          onChange={(e) => setTosAggrement(e.target.checked)}
        />
        <p>
          Potvrđujete kako ste upoznati s Izjavom o privatnosti i slažete se s
          njom
        </p>
      </label>
      <button
        type="submit"
        className="btn btn-primary disabled:cursor-not-allowed"
        disabled={idle ? true : false}
      >
        pošalji
      </button>
    </form>
  );
};
