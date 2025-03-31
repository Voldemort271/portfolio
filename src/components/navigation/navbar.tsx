"use client";

import React, { type Dispatch, type SetStateAction, useState } from "react";
import NavLogo from "@/components/navigation/nav-logo";
import NavLabel from "@/components/navigation/nav-label";
import { AnimatePresence } from "motion/react";
import NavMenu from "@/components/navigation/nav-menu";

const MenuToggle = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex cursor-pointer items-center gap-2.5"
      onClick={() => setToggle(!toggle)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NavLabel toggle={toggle} hover={hover} />
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-950/[0.2]">
        <NavLogo toggle={toggle} hover={hover} />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative z-20 flex w-full items-center justify-between px-5 py-5 md:px-12">
      <div className="font-title text-base font-medium uppercase">
        folio &apos;25
      </div>
      <MenuToggle toggle={toggle} setToggle={setToggle} />
      <AnimatePresence mode={"wait"}>
        {toggle && <NavMenu setToggle={setToggle} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
