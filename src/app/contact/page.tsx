"use client";

import React from "react";
import { motion } from "motion/react";
import ContactContent from "@/components/contact/contact-content";

const ContactPage = () => {
  return (
    <main className="font-body relative z-0 h-dvh w-screen">
      <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_200px] px-5 py-5 pt-20 md:grid-cols-12 md:grid-rows-1 lg:px-12">
        <div className="col-span-8">
          <ContactContent />
        </div>
        <div className="col-span-4 pt-12 md:pt-0 md:pl-12">
          <motion.div
            className="h-full w-full bg-zinc-950/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
            }}
          ></motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
