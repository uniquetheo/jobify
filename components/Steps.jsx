import Image from "next/image";
import { steps } from "../data/essential";

const Steps = () => {
  return (
    <div className="py-6">
      <div className="">
        <span className="text-xs uppercase font-bold text-primary-orange">
          4 Easy Steps
        </span>
      </div>
      <div className="">
        {steps.map((step, index) => (
          <div key={index} className="h-[150px] flex my-8 gap-4 text-sm ">
            <div className="content h-full border-l-2 border-primary-orange pl-2 flex flex-col justify-between">
              <span className="text-primary-blue text-4xl text-nowrap">
                {step.count}
              </span>
              <div className="text flex flex-col gap-1">
                <span className="font-bold">{step.title}</span>
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              </div>
            </div>
            <div className="image">
              <div className="container w-[150px] h-[150px] border border-gray-400 rounded-[36px] flex items-center justify-center relative overflow-hidden">
                <div className="inner ">
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
