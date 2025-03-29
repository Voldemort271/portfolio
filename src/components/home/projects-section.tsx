"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectDetails from "@/components/home/project-details";
import ProjectsCarousel from "@/components/home/projects-carousel";
import { AnimatePresence, motion } from "motion/react";

const ProjectsSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parent, setParent] = useState<Element | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      setParent(parentRef.current);
    }
  }, [parentRef]);

  return (
    <motion.div
      className="flex h-full flex-col items-center justify-center gap-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.5, 1, 0.89, 1],
        },
      }}
      ref={parentRef}
    >
      <AnimatePresence mode="wait">
        <ProjectDetails index={index} key={index} />
      </AnimatePresence>
      <ProjectsCarousel setIndex={setIndex} length={5} parent={parent} />
      <div className="text-sm font-semibold text-zinc-600 uppercase">
        scroll
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
