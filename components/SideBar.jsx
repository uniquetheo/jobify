"use client";

import Link from "next/link";
import Logo from "./logo";
import PrimaryMenu from "./PrimaryMenu";

const SideBar = (open) => {
  return (
    <div className="left-0 h-full border shadow-lg bg-white">
      <div className="flex flex-col gap-4 w-full">
        <div className="p-4">
          <Link
            href="/dashboard"
            className="flex gap-2 tracking-wider text-primary-blue font-bold sm:text-xl md:text-2xl lg:3xl"
          >
            <Logo />
            <span>Jobify</span>
          </Link>
        </div>
        {/* <div className="p-4">
          <span>Search anything...</span>
        </div> */}
        <div className="p-4 menu">
          <PrimaryMenu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
