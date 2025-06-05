import React, { type Dispatch, type SetStateAction } from "react";
import ContactTitle from "@/components/contact/contact-title";
import { socials } from "@/lib/socials";
import SocialLink from "@/components/contact/social-link";
import { motion } from "motion/react";

const ContactDetails = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-5">
      <ContactTitle>find my socials</ContactTitle>
      <motion.div
        className="flex w-full flex-col gap-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ opacity: 0, y: -50 }}
      >
        {socials.map((social, i) => (
          <SocialLink key={i} social={social} />
        ))}
        <div
          className="font-title w-fit cursor-pointer bg-zinc-950 px-8 py-3 text-base font-semibold text-zinc-100 uppercase"
          onClick={() => setToggle(true)}
        >
          it&apos;s urgent
        </div>
      </motion.div>
    </div>
  );
};

export default ContactDetails;
