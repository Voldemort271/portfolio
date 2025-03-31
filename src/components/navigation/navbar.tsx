"use client";

import React, { useState } from "react";
import NavLogo from "@/components/navigation/nav-logo";
import NavLabel from "@/components/navigation/nav-label";

const MenuToggle = () => {
  const [toggle, setToggle] = useState(false);
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
  return (
    <div className="relative flex w-full items-center justify-between px-5 py-5 md:px-12">
      <div className="font-title text-base font-medium uppercase">
        folio &apos;25
      </div>
      <MenuToggle />
    </div>
  );
};

export default Navbar;
