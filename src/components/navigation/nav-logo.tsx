"use client";

import { motion } from "motion/react";
import React from "react";

const NavLogo = ({ toggle, hover }: { toggle: boolean; hover: boolean }) => {
  const fill = "#09090b";
  const size = 24;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.circle
        cx="12"
        cy="5"
        r="2"
        initial={false}
        animate={{
          opacity: toggle ? 0 : 1,
          cy: hover ? 2 : 5,
          rotate: toggle ? 135 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      />
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        initial={false}
        animate={{
          d: toggle
            ? "M6 6L18 18M18 6L6 18"
            : "M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z", // Circle
          stroke: toggle ? fill : "none",
          strokeWidth: toggle ? 2 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      />
      <motion.circle
        cx="12"
        cy="19"
        r="2"
        initial={false}
        animate={{
          opacity: toggle ? 0 : 1,
          cy: hover ? 22 : 19,
          rotate: toggle ? 135 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      />
    </motion.svg>
  );
};

export default NavLogo;
