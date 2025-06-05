import React, { useState } from "react";
import type { SocialData } from "@/lib/socials";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const SocialLink = ({ social }: { social: SocialData }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={social.href}
      target={"_blank"}
      className="flex w-full cursor-pointer flex-row items-baseline gap-5 overflow-clip text-zinc-950 uppercase"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          className="font-title hidden shrink-0 tracking-wider sm:block"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            },
            opacity: hover ? 1 : 0.5,
            fontWeight: hover ? 500 : 400,
          }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.3,
              ease: [0.7, 0, 0.84, 0],
            },
          }}
          key={hover ? 1 : 0}
        >
          {hover ? social.id : social.type}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.span
          className="font-title block shrink-0 text-2xl tracking-wider sm:hidden"
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.3,
              ease: [0.7, 0, 0.84, 0],
            },
          }}
          key={hover ? 1 : 0}
        >
          {hover ? social.id : social.type}
        </motion.span>
      </AnimatePresence>

      <div className="h-0.5 w-full shrink bg-zinc-950/50"></div>
    </Link>
  );
};

export default SocialLink;
