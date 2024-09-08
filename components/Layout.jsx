"use client";

import DashHeader from "./DashHeader";
import { useState } from "react";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`grid  w-full min-h-screen ${
        open ? "grid-cols-[250px_1fr]" : "grid-cols-[50px_1fr]"
      } `}
    >
      <SideBar />
      <div className="flex flex-col min-h-screen">
        <DashHeader />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
