"use client";

import { motion } from "motion/react";
import React from "react";

const NavLabel = ({ toggle, hover }: { toggle: boolean; hover: boolean }) => {
  return (
    <motion.div className="font-title overflow-y-clip text-sm font-medium text-zinc-600 uppercase">
      <motion.div
        initial={{ letterSpacing: "0px" }}
        animate={{
          letterSpacing: hover ? "3px" : "0px",
        }}
        transition={{ duration: 0.2 }}
      >
        {toggle ? "close" : "menu"}
      </motion.div>
    </motion.div>
  );
};

export default NavLabel;
