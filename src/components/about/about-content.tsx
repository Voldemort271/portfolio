"use client";

import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
} from "react";
import Lenis from "lenis";
import { motion, useInView } from "motion/react";

const AboutContent = ({
  setCurrent,
}: {
  setCurrent: Dispatch<SetStateAction<number>>;
}) => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const firstContent = useRef<HTMLDivElement | null>(null);
  const secondContent = useRef<HTMLDivElement | null>(null);

  const inView1 = useInView(firstContent);
  const inView2 = useInView(secondContent);

  useEffect(() => {
    if (inView1) {
      setCurrent(0);
    } else if (inView2) {
      setCurrent(1);
    }
  }, [inView1, inView2]);

  useEffect(() => {
    if (!wrapper.current || !firstContent.current) return;

    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: firstContent.current,
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
      <div ref={firstContent} className="h-full w-full">
        <div className="flex h-full w-full flex-col items-start justify-end gap-12">
          <div className="hidden aspect-[3/4] h-full max-h-[400px] self-end bg-zinc-950/[0.2] sm:block md:hidden"></div>
          <div className="font-body max-w-[700px] space-y-5 overflow-y-clip text-base leading-normal text-zinc-950">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis! Aut ipsa nihil
              perferendis quidem quos! Aspernatur consequatur debitis laborum,
              libero magnam neque obcaecati! Reiciendis!
            </motion.p>
            <div className="font-body text-sm font-bold text-zinc-500 uppercase">
              scroll here
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-end justify-center gap-12 text-right">
          <div className="font-body max-w-[700px] space-y-5 overflow-y-clip text-base leading-normal text-zinc-950">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis! Aut ipsa nihil
              perferendis quidem quos! Aspernatur consequatur debitis laborum,
              libero magnam neque obcaecati! Reiciendis!
            </motion.p>
          </div>
        </div>
        <div
          ref={secondContent}
          className="flex h-full w-full flex-col items-start justify-center gap-12"
        >
          <div className="font-body max-w-[700px] space-y-5 overflow-y-clip text-base leading-normal text-zinc-950">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis! Aut ipsa nihil
              perferendis quidem quos! Aspernatur consequatur debitis laborum,
              libero magnam neque obcaecati! Reiciendis!
            </motion.p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-end justify-start gap-12 text-right">
          <div className="font-body max-w-[700px] space-y-5 overflow-y-clip text-base leading-normal text-zinc-950">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto doloremque eum perspiciatis quam quia sit? Aut ipsa
              nihil perferendis quidem quos! Aspernatur consequatur debitis
              laborum, libero magnam neque obcaecati! Reiciendis! Aut ipsa nihil
              perferendis quidem quos! Aspernatur consequatur debitis laborum,
              libero magnam neque obcaecati! Reiciendis!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
