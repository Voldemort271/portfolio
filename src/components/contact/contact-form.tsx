import React, { type Dispatch, type SetStateAction } from "react";
import ContactTitle from "@/components/contact/contact-title";

const ContactForm = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-5">
      <ContactTitle>get in touch</ContactTitle>

      <div
        className="font-title w-fit cursor-pointer bg-zinc-950 px-12 py-4 text-lg font-medium text-zinc-100 uppercase"
        onClick={() => setToggle(false)}
      >
        form here
      </div>
    </div>
  );
};

export default ContactForm;
