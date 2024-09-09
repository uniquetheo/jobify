import Image from "next/image";
import { steps } from "../data/essential";

const Steps = () => {
  return (
    <div className="py-6 w-full max-w-[882px] mx-auto">
      <div className="">
        <span className="text-xs uppercase font-bold text-primary-orange">
          4 Easy Steps
        </span>
      </div>
      <div className="w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`h-[150px] sm:h-[200px] md:h-[300px] w-full  flex gap-4 md:gap-8 justify-between my-8 text-sm ${
              index % 2 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="content h-full border-l-2 border-primary-orange pl-2 flex flex-col justify-between">
              <span
                className={`text-primary-blue text-4xl md:text-6xl text-nowrap ${
                  index % 2 ? "" : "text-right"
                }`}
              >
                {step.count}
              </span>
              <div className="text flex flex-col gap-1">
                <span className="font-bold sm:text-lg md:text-xl">
                  {step.title}
                </span>
                <span className="text-xs sm:text-sm md:text-lg text-muted-foreground">
                  {step.description}
                </span>
              </div>
            </div>
            <div className="image">
              <div className="container w-[150px] h-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] border border-gray-400 rounded-[36px] flex items-center justify-center relative overflow-hidden">
                <div className="inner absolute w-full h-full">
                  <Image
                    className="object-cover"
                    src={step.image}
                    alt={step.count}
                    fill
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
