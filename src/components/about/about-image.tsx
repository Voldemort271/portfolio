"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

const DisplayImage = ({ current }: { current: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
      }}
      exit={{
        opacity: 0,
        y: -50,
        transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] },
      }}
      className="h-full w-full bg-zinc-950/[0.2]"
    >
      {current}
    </motion.div>
  );
};

const AboutImage = ({ current }: { current: number }) => {
  return (
    <div className="hidden aspect-[3/4] h-full max-h-[400px] md:block xl:max-h-[600px]">
      <AnimatePresence mode="wait">
        <DisplayImage current={current} key={current} />
      </AnimatePresence>
    </div>
  );
};

export default AboutImage;
