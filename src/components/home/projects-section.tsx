"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectDetails from "@/components/home/project-details";
import ProjectsCarousel from "@/components/home/projects-carousel";
import { AnimatePresence } from "motion/react";

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
    <div
      className="flex h-full flex-col items-center justify-center gap-5"
      ref={parentRef}
    >
      <AnimatePresence mode="wait">
        <ProjectDetails index={index} key={index} />
      </AnimatePresence>
      <ProjectsCarousel setIndex={setIndex} length={5} parent={parent} />
      <div className="text-sm font-semibold text-zinc-600 uppercase">
        scroll
      </div>
    </div>
  );
};

export default ProjectsSection;
