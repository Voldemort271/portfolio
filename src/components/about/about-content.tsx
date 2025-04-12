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
    <div ref={wrapper} className="h-full w-full overflow-hidden">
      <div ref={content} className="h-full w-full">
        <div className="h-full w-full">hi</div>
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
