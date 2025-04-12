import React from "react";
import TitleText from "@/components/about/title-text";
import AboutContent from "@/components/about/about-content";

const Page = () => {
  return (
    <main className="font-body relative z-0 flex h-dvh w-screen flex-col items-stretch justify-between pt-20">
      <TitleText>
        Some things about me that you may or may not like. Thank you for your
        cooperation.
      </TitleText>
      <div className="flex h-full w-full items-end justify-between gap-12 px-12 py-5">
        <AboutContent />
        <div className="aspect-[3/4] h-full max-h-[600px] bg-zinc-950/[0.2]"></div>
      </div>
    </main>
  );
};

export default Page;
