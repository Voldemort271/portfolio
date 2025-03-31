"use client";

import React, { type Dispatch, type SetStateAction, useState } from "react";
import { motion } from "motion/react";
import navLinks, { type navLinkDetails } from "@/lib/nav-links";
import { usePathname } from "next/navigation";

const NavLink = ({ el, i }: { el: navLinkDetails; i: number }) => {
  const [hover, setHover] = useState(false);
  const path = usePathname();

  const active = path === el.href;

  return (
    <div
      className="flex w-full cursor-pointer flex-row items-baseline gap-5 overflow-clip uppercase"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: hover ? 1 : 0.5,
          height: hover || active ? 10 : 2,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="w-full bg-zinc-950"
      ></motion.div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3 + i * 0.05,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="font-title hidden shrink-0 font-normal sm:block"
        style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
      >
        {el.name}
      </motion.div>
      <motion.div className="font-title block shrink-0 text-4xl font-medium sm:hidden">
        {el.name}
      </motion.div>
    </div>
  );
};

const NavMenu = ({
  setToggle,
}: {
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        className="absolute top-0 right-0 -z-10 h-dvh w-screen overflow-clip bg-zinc-950/[0.3]"
        onClick={() => setToggle(false)}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 -z-10 h-dvh w-screen border-l-2 border-zinc-950/[0.2] bg-zinc-100 pt-24 md:w-2/3 lg:w-1/2"
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        exit={{
          x: "100%",
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <nav className="flex h-full w-full flex-col justify-between p-5 sm:p-12">
          <div className="font-body block max-w-lg overflow-clip text-zinc-600 [@media(max-height:600px)]:h-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam
            expedita iste maxime natus provident quas? Blanditiis eligendi,
            explicabo maiores officia quia temporibus totam ullam.
          </div>
          <motion.div className="flex w-full flex-col gap-5">
            {navLinks.map((el, i) => (
              <NavLink key={i} el={el} i={i} />
            ))}
            <div className="font-body mt-5 flex flex-row gap-5 overflow-clip text-lg font-medium text-zinc-950">
              <motion.div
                className="cursor-pointer"
                initial={{ y: "100%", opacity: 0.5 }}
                animate={{ y: 0, transition: { duration: 0.2, delay: 0.5 } }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
              >
                GitHub?
              </motion.div>
              <motion.div
                className="cursor-pointer"
                initial={{ y: "100%", opacity: 0.5 }}
                animate={{ y: 0, transition: { duration: 0.2, delay: 0.55 } }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
              >
                LinkedIn?
              </motion.div>
              <motion.div
                className="cursor-pointer"
                initial={{ y: "100%", opacity: 0.5 }}
                animate={{ y: 0, transition: { duration: 0.2, delay: 0.6 } }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
              >
                Email?
              </motion.div>
            </div>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};

export default NavMenu;
