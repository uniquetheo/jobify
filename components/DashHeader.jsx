"use client";

import { redirect, usePathname } from "next/navigation";
import { primaryMenu } from "../data/essential";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const DashHeader = () => {
  const pathname = usePathname();
  const getPageTitle = primaryMenu.find((item) => item.link === pathname);
  const [userOpen, setUserOpen] = useState(false);
  // const [userSession, setUserSession] = useState(null);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <div className="w-full bg-white h-[100px] flex justify-between  shadow-sm items-center px-4 sm:px-8 xl:px-12">
      <div className="pageTitle ">
        <strong className="md:leading-normal text-2xl">
          {getPageTitle.name}
        </strong>
      </div>
      <div className="avatar relative flex h-full justify-center items-center transition-all gap-8">
        <div className="icons flex gap-6">
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
        </div>
        <div
          onMouseEnter={() => setUserOpen((prev) => !prev)}
          onMouseLeave={() => setUserOpen((prev) => !prev)}
          className="w-12 h-12 bg-slate-400 rounded-full text-white flex items-center justify-center "
        >
          <span className="cursor-pointer">TM</span>
          {userOpen && (
            <div className="absolute top-[60px] right-[8px] flex flex-col gap-2 p-4 rounded bg-white text-black shadow">
              {session ? (
                <span className="">{session?.user?.email}</span>
              ) : (
                <span className="">user@email.com</span>
              )}
              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="text-red-500"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
