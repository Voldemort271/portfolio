import React, { useState } from "react";
import ContactDetails from "@/components/contact/contact-details";
import { AnimatePresence } from "motion/react";
import ContactForm from "@/components/contact/contact-form";

const ContactContent = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="h-full w-full">
      <AnimatePresence mode={"wait"}>
        {toggle ? (
          <ContactForm setToggle={setToggle} key={1} />
        ) : (
          <ContactDetails setToggle={setToggle} key={2} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactContent;
