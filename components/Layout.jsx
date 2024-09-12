// "use client";

import DashHeader from "./DashHeader";
// import { useState } from "react";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  // const [open, setOpen] = useState(true);

  return (
    <div
      // className={`grid  w-full min-h-screen ${
      //   open ? "grid-cols-[250px_1fr]" : "grid-cols-[50px_1fr]"
      // } `}
      className="w-full min-h-screen grid grid-cols-[250px_1fr]"
    >
      <SideBar />
      <div className="flex flex-col min-h-screen">
        <DashHeader />
        <div className="bg-slate-50 h-full min-w-full p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
