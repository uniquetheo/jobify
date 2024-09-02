import Image from "next/image";
import { Button } from "./ui/button";
import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <div className="w-full lg:h-[calc(100vh-80px)] min-h-full">
      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full h-full flex justify-center items-center p-4 sm:px-8 md:px-12">
          <div className="flex flex-col gap-4 md:gap-8 h-full justify-center w-full">
            <span className={`text-xs uppercase font-bold text-primary-orange`}>
              Empower Your Career Journey
            </span>
            <div className="aspect-w-1 aspect-h-1 w-full max-w-xs font-bold flex flex-col">
              <span className="text-3xl lg:text-5xl font-bold whitespace-nowrap w-full">
                Transform your job
              </span>
              <span className="text-3xl lg:text-5xl font-bold whitespace-nowrap w-full">
                search with Jobify.
              </span>
            </div>
            <span>
              Create professional CVs and cover letters effortlessly. With our
              intuitive tools, you can land your dream job faster—no design
              skills needed. Start building your future in just a few clicks.
            </span>
            <div>
              <Button>Start Now</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full  flex items-center justify-center p-4 sm:p-8 md:p-12 ">
          <div className="relative aspect-square w-full mx-8 xl:mx-12">
            <div className="w-full h-full overflow-hidden">
              <Image
                className="object-cover w-full h-full rounded-full over` z-10"
                src="/../hero-woman.jpg"
                fill
                unoptimized
                alt="hero"
              />
            </div>
            <div className="">
              <Image
                className="absolute object-contain w-[65px] -top-[20px] left-[125px] "
                src="/../fill.svg"
                width="107"
                height="109"
                alt="art"
              />
              <Image
                className="absolute object-contain w-[75px] bottom-[15px] "
                src="/../round.svg"
                width="125"
                height="108"
                alt="art"
              />
              <Image
                className="absolute object-contain w-[16px] bottom-[30px] right-[20px] z-20"
                src="/../waves.svg"
                width="25"
                height="79"
                alt="art"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
