import { HydrateClient } from "@/trpc/server";
import ProjectsSection from "@/components/home/projects-section";
import NameText from "@/components/home/name-text";
import React from "react";

export default async function Home() {
  // void api.post.getLatest.prefetch();
  // TODO: Prefetch projects
  // TODO: WebGL carousel

  return (
    <HydrateClient>
      <main className="font-body relative z-0 flex h-dvh w-screen flex-col overflow-clip">
        <ProjectsSection delay={0.1} />
        <NameText />
      </main>
    </HydrateClient>
  );
}
