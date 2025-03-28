import React from "react";
import ProjectDetails from "@/components/home/project-details";
import ProjectsCarousel from "@/components/home/projects-carousel";

const ProjectsSection = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ProjectDetails />
      <ProjectsCarousel />
      <div className="text-sm font-semibold text-zinc-600 uppercase">
        scroll
      </div>
    </div>
  );
};

export default ProjectsSection;
