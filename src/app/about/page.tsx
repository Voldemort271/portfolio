import React from "react";
import TitleText from "@/components/about/title-text";

const Page = () => {
  return (
    <main className="font-body relative z-0 flex h-dvh w-screen flex-col items-stretch justify-between overflow-clip pt-20">
      <TitleText>
        Some things about me that you may or may not like. Thank you for your
        cooperation.
      </TitleText>
      <div className="h-full w-full bg-red-400">about</div>
    </main>
  );
};

export default Page;
