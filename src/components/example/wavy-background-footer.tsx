import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function WavyBackgroundFooter() {
  return (
    <>
      <WavyBackground className="mx-auto pb-40 align-center justify-center bg-cyan-100 flex flex-col align-center" backgroundFill="white" />
      <div className="flex flex-col align-center justify-center absolute z-100 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
        <p className="text-4xl md:text-4xl lg:text-7xl text-black inter-var text-center font-julius font-bold w-[100vw]">
          Big solutions for <br />
          bold visions
        </p>
      </div>
      <div className="flex flex-col items-center justify-center absolute z-100 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center w-[80vw]">
          We create innovative AI soloution that transforms <br />
          businesses worldwide
        </p>
        <div className="flex flex-col items-end justify-center h-[60px] w-[32px] rounded-full bg-[#E4E4E4] mt-8 border border-[#5E5E5E]">
          <div
            className="h-[30px] w-[16px] rounded-full bg-[#5E5E5E] mx-auto animate-bounce"
          ></div>
        </div>

      </div>

    </>
  );
}
