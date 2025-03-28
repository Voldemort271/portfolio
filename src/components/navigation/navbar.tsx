"use client";

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      <div className="font-title text-sm font-medium text-zinc-600 uppercase">
        menu
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-950/[0.2]">
        <MoreVertical />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-12 py-5">
      <div className="font-title text-base font-medium uppercase">
        folio &apos;25
      </div>
      <MenuToggle />
    </div>
  );
};

export default Navbar;
