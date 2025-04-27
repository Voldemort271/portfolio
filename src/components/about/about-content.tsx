"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const AboutContent: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapper.current || !content.current) return;

    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: content.current,
      lerp: 0.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div ref={wrapper} className="h-full w-full overflow-hidden bg-red-200">
      <div ref={content} className="h-full w-full">
        <div className="flex h-full w-full flex-col items-start justify-end gap-12">
          <div className="hidden aspect-[3/4] h-full max-h-[400px] self-end bg-zinc-950/[0.2] sm:block md:hidden"></div>
          <div className="font-body max-w-[700px] space-y-5 text-base leading-normal text-zinc-950">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis!
            </p>
            <p className="hidden xl:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis!
            </p>
            <div className="font-body text-sm font-bold text-zinc-500 uppercase">
              scroll
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 items-end justify-items-start gap-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className={`col-span-7 w-full bg-red-400 ${
                i % 2 ? "col-start-6" : ""
              }`}
              key={i}
            >
              hello world
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
