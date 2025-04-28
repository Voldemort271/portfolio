"use client";

import React, { useState } from "react";
import TitleText from "@/components/about/title-text";
import AboutContent from "@/components/about/about-content";
import AboutImage from "@/components/about/about-image";

const Page = () => {
  const [current, setCurrent] = useState(0);

  return (
    <main className="font-body relative z-0 flex h-dvh w-screen flex-col items-stretch justify-between pt-20">
      <TitleText>
        Some things about me that you may or may not like. Thank you for your
        cooperation.
      </TitleText>
      <div className="flex h-full w-full items-end justify-between gap-12 px-5 py-5 sm:px-12">
        <AboutContent setCurrent={setCurrent} />
        <AboutImage current={current} />
      </div>
    </main>
  );
};

export default Page;
