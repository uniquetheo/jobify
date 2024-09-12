import Link from "next/link";
import React from "react";
import SigninDrop from "./SigninDrop";
import Logo from "./logo";
import { Button } from "./ui/button";

const ExternalMenu = () => {
  return (
    <nav className="h-[80px] bg-white/70 backdrop:blur-2xl z-30 sticky top-0">
      <div className="w-full h-full flex justify-between items-center text-white px-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex logo tracking-wider text-primary-blue font-bold sm:text-xl md:text-2xl lg:3xl"
        >
          <Logo />
          <span>JOBIFY</span>
        </Link>
        {/* <SigninDrop /> */}
        <Link href="/api/auth/signin">
          <Button>Sign in</Button>
        </Link>
      </div>
    </nav>
  );
};

export default ExternalMenu;
