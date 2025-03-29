"use client";

import React, { useRef, useState } from "react";
import ProjectDetails from "@/components/home/project-details";
import ProjectsCarousel from "@/components/home/projects-carousel";

const ProjectsSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parent, setParent] = useState<Element | null>(null);

  React.useEffect(() => {
    if (parentRef.current) {
      setParent(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-5"
      ref={parentRef}
    >
      <ProjectDetails />
      <ProjectsCarousel parent={parent} />
      <div className="text-sm font-semibold text-zinc-600 uppercase">
        scroll
      </div>
    </div>
  );
};

export default ProjectsSection;
