"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import fitty from "fitty";

const ContactTitle = ({ children }: { children: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const fitInstance = fitty(textRef.current, {
        minSize: 16,
        maxSize: 196,
      });

      return () => fitInstance?.unsubscribe();
    }
  }, []);

  return (
    <div className="font-title mx-0 flex items-center justify-center overflow-clip text-left text-6xl leading-none font-semibold uppercase">
      <motion.div
        ref={textRef}
        initial={{ y: "100%", opacity: 0.5 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 },
        }}
        exit={{
          y: "-100%",
          opacity: 0.5,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContactTitle;
