// "use client";

import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { usePathname } from "next/navigation";
import { primaryMenu } from "../data/essential";

import { Button } from "./ui/button";

const DashHeader = () => {
  const pathname = usePathname();
  const getName = primaryMenu.find((item) => item.link === pathname);
  //   const session = await getServerSession();

  return (
    <div className="w-full bg-white h-[100px] flex justify-between  shadow-sm items-center px-4 sm:px-8 xl:px-12">
      <div className="pageTitle ">
        <strong className="md:leading-normal text-2xl">{getName.name}</strong>
      </div>
      <div className="avatar flex h-full justify-center items-center gap-8">
        <div className="icons flex gap-6">
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
        </div>
        <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default DashHeader;
