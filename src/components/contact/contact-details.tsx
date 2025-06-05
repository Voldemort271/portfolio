import React, { type Dispatch, type SetStateAction } from "react";
import ContactTitle from "@/components/contact/contact-title";

const ContactDetails = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-5">
      <ContactTitle>find my socials</ContactTitle>
      <div
        className="font-title w-fit cursor-pointer bg-zinc-950 px-12 py-4 text-lg font-medium text-zinc-100 uppercase"
        onClick={() => setToggle(true)}
      >
        deets here
      </div>
    </div>
  );
};

export default ContactDetails;
