"use client";

import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { motion } from "motion/react";

const TitleText = ({ children }: { children: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string[]>([]);
  const instance = useRef<SplitType | null>(null);

  const splitLines = () => {
    if (ref.current) {
      instance.current?.revert();

      instance.current = new SplitType(ref.current, {
        types: "lines",
        lineClass: "line-child",
      });

      const lines = ref.current.querySelectorAll(".line-child");
      const extracted = Array.from(lines).map((line) => line.textContent || "");

      setContent(extracted);
    }
  };

  useEffect(() => {
    splitLines();
    const handleResize = () => splitLines();
    window.addEventListener("resize", handleResize);

    return () => {
      instance.current?.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-title w-full px-5 font-medium uppercase md:px-12">
      <div
        ref={ref}
        className="invisible absolute max-w-[800px] leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
      >
        {children}
      </div>

      <div
        className="max-w-[800px] space-y-2 leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
      >
        {content.map((line, i) => (
          <div className="overflow-y-clip" key={i}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div>{line}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleText;
