"use client";
import React, { FormEventHandler, useState } from "react";
import { postNewsletterEmail } from "../../../../sanity/lib/queries";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [idle, setIdle] = useState(false);
  const [formResponse, setFormResponse] = useState("");
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIdle(true);

    const resStatus = await postNewsletterEmail(email);
    console.log(resStatus);
    setIdle(false);
    if (resStatus.success) {
      setEmail("");
    }
    setFormResponse(resStatus.msg);
    setTimeout(() => {
      setFormResponse("");
    }, 3000);
  };
  return (
    <>
      <form
        className=" flex w-full max-w-[800px] max-sm:flex-col shadow-md "
        onSubmit={formSubmitHandler}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="flex-1 py-[10px] px-[8px] max-sm:mb-[10px]"
        />
        <button
          type="submit"
          disabled={idle ? true : false}
          className="sm:max-w-[200px] w-full disabled:cursor-not-allowed  bg-primary text-primary-content py-[10px] uppercase hover:bg-primary-focus transition-universal"
        >
          prijavi se
        </button>
      </form>
      {formResponse && (
        <p className="text-headingS text-base-100 bg-primary p-2">
          {formResponse}
        </p>
      )}
    </>
  );
};

export default NewsletterForm;
