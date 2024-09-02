import Link from "next/link";
import { footerMenu1, footerMenu2, socials } from "../data/essential";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative bottom-0">
      <div className="flex flex-col ">
        <div className="flex w-full justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-4 lg:py-6">
          <div className="flex flex-col gap-2">
            {footerMenu1.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-muted-foreground hover:text-white"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            {footerMenu2.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-muted-foreground hover:text-white"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="divider border-y"></div>
        <div className="flex w-full justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-4 lg:py-6">
          <div className="text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Jobify</span>
          </div>
          <div className="flex gap-4 text-muted-foreground">
            {socials.map((item, idx) => (
              <div key={idx} className="hover:text-white">
                <Link href={item.link}>{item.icon}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
