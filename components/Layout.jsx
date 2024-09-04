"use client";

import { useState } from "react";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`grid  w-full min-h-screen grid-cols-[${
        open ? "250" : "50"
      }px_1fr] `}
    >
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
