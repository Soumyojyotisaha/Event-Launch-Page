import Image from "next/image";
import { assets } from "../utils/asset-utils";
import { type Framework,frameworks } from "../utils/framework-utils";
import { CN } from "../utils/tailwind-utils";

export const FrameworkRotation = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  return (
    <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
      {frameworks.map((name, index) => (
        <Image
          key={name}
          src={assets[name]}
          className={CN(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 ",
            {
              "opacity-100 transform-none": currentFramework === name,
              "opacity-0 -translate-y-2":
                index > frameworks.indexOf(currentFramework as Framework),
              "opacity-0 translate-y-2":
                index < frameworks.indexOf(currentFramework as Framework),
            }
          )}
          alt="Framework logo"
          width="80"
          height="80"
        />
      ))}
    </div>
  );
};
