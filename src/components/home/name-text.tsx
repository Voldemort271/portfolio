"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import fitty from "fitty";

const NameText = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const fitInstance = fitty(textRef.current, {
        minSize: 16,
        maxSize: 200,
      });

      return () => fitInstance?.unsubscribe(); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="font-title mx-0 flex items-center justify-center overflow-clip text-center leading-none font-semibold uppercase md:mx-5 lg:mx-12">
      <motion.div
        ref={textRef}
        initial={{ y: "100%", opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
      >
        my name hereeee
      </motion.div>
    </div>
  );
};

export default NameText;
