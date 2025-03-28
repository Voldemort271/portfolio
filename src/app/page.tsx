import { HydrateClient } from "@/trpc/server";
import Navbar from "@/components/navigation/navbar";
import ProjectsSection from "@/components/home/projects-section";
import NameText from "@/components/home/name-text";

export default async function Home() {
  // void api.post.getLatest.prefetch();
  // TODO: Prefetch projects

  return (
    <HydrateClient>
      <main className="font-body flex h-screen w-screen flex-col bg-red-400">
        <Navbar />
        <ProjectsSection />
        <NameText />
      </main>
    </HydrateClient>
  );
}
