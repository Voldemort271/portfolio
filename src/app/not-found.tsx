"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center border-8 border-zinc-400 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0 }}
        className="font-title font-semibold text-zinc-400 uppercase"
        style={{ fontSize: "clamp(6rem, 15vw, 10rem)" }}
      >
        oh my 404
      </motion.div>
      <div className="font-body max-w-[700px] text-zinc-950">
        The page you are looking for does not exist.{" "}
        <Link href={"/"} className="text-sky-600 underline hover:text-sky-800">
          Proceed to home?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
