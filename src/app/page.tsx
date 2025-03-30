import { HydrateClient } from "@/trpc/server";
import Navbar from "@/components/navigation/navbar";
import ProjectsSection from "@/components/home/projects-section";
import NameText from "@/components/home/name-text";

export default async function Home() {
  // void api.post.getLatest.prefetch();
  // TODO: Prefetch projects
  // TODO: WebGL carousel

  return (
    <HydrateClient>
      <main className="font-body flex h-dvh w-screen flex-col">
        <Navbar />
        <ProjectsSection delay={0.1} />
        <NameText />
      </main>
    </HydrateClient>
  );
}
