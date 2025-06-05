import React, { type Dispatch, type SetStateAction } from "react";
import ContactTitle from "@/components/contact/contact-title";
import { motion } from "motion/react";

const ContactForm = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-5">
      <motion.div
        className="w-full space-y-2.5"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ opacity: 0, y: -50 }}
      >
        <ContactTitle>get in touch</ContactTitle>
        <div className="font-body hidden max-w-[800px] text-base text-zinc-600 sm:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          dolorem enim quod reprehenderit repudiandae saepe, tempora ullam! Aut
          culpa cumque, dolores esse excepturi illo maxime molestiae nesciunt,
          quae quasi vero.
        </div>
      </motion.div>
      <motion.form
        className="flex w-full flex-col gap-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <label
              htmlFor="name"
              className="font-title text-lg font-medium uppercase"
            >
              Name
            </label>
            <input
              className="w-full border border-zinc-950 bg-zinc-100 px-5 py-2 text-base outline-0"
              placeholder="No dummy names pls"
              id="name"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              htmlFor="name"
              className="font-title text-lg font-medium uppercase"
            >
              Subject
            </label>
            <input
              className="w-full border border-zinc-950 bg-zinc-100 px-5 py-2 text-base outline-0"
              placeholder="What do you want to talk about?"
              id="name"
            />
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="min-h-40 w-full border border-zinc-950 bg-zinc-100 px-5 py-2"
          placeholder="Type away"
        ></textarea>
        <div className="flex w-full justify-end gap-5">
          <div
            className="font-title w-fit cursor-pointer border border-zinc-950 bg-zinc-100 px-8 py-3 text-base font-semibold text-zinc-950 uppercase"
            onClick={() => setToggle(false)}
          >
            go back
          </div>
          <input
            type="submit"
            value="submit"
            className="font-title w-fit cursor-pointer border border-zinc-950 bg-zinc-950 px-8 py-3 text-base font-semibold text-zinc-100 uppercase"
          />
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
