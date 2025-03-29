"use client";

import React from "react";
import projectData from "@/lib/projects";
import { motion } from "motion/react";

const ProjectDetails = ({ index }: { index: number }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 overflow-y-clip px-5 text-left">
      <motion.div
        className="font-body w-full max-w-[600px] text-base text-zinc-600"
        initial={{ y: "100%", opacity: 0.2 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        exit={{
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
        }}
      >
        {projectData[index]?.description}
      </motion.div>
      <div className="overflow-clip">
        <motion.div
          className="font-title text-center text-4xl font-medium uppercase sm:text-6xl"
          initial={{ y: "100%", opacity: 0.2 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: [0.7, 0, 0.84, 0],
              delay: 0.2,
            },
          }}
        >
          {projectData[index]?.name}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
