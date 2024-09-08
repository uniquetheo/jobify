"use client";

import Link from "next/link";
import { primaryMenu } from "../data/essential";
import { usePathname } from "next/navigation";

const PrimaryMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 ">
      {primaryMenu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={` rounded p-3 border-l-4 border-y hover:text-primary-orange/80 ${
            pathname === item.link
              ? "border border-l-primary-orange bg-[#e8effd] text-primary-orange"
              : ""
          }`}
        >
          <span className="flex gap-2">
            {item.icon}
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PrimaryMenu;
