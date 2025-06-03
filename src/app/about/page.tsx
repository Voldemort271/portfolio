"use client";

import React, { useState } from "react";
import TitleText from "@/components/about/title-text";
import AboutContent from "@/components/about/about-content";
import AboutImage from "@/components/about/about-image";

const Page = () => {
  const [current, setCurrent] = useState(0);

  return (
    <main className="font-body relative z-0 flex h-dvh w-screen flex-col items-stretch justify-between">
      <div className="shrink-0 pt-20">
        <TitleText>
          Some things about me that you may or may not like. Thank you for your
          cooperation.
        </TitleText>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-end justify-between gap-12 px-5 py-5 sm:px-12">
        <AboutContent setCurrent={setCurrent} />
        <div className="hidden aspect-[3/4] h-full max-h-[400px] md:block xl:max-h-[600px]">
          <AboutImage current={current} />
        </div>
      </div>
    </main>
  );
};

export default Page;
