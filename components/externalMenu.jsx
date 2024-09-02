import Link from "next/link";
import React from "react";
import SigninDrop from "./SigninDrop";

const ExternalMenu = () => {
  return (
    <nav className="h-[80px] bg-white/70 backdrop:blur-2xl z-30 sticky top-0">
      <div className="w-full h-full flex justify-between items-center text-white px-4 sm:px-8 lg:px-12">
        <Link href="/" className="logo tracking-wider text-primary-blue font-bold">
          JOBIFY
        </Link>
        <SigninDrop />
      </div>
    </nav>
  );
};

export default ExternalMenu;
