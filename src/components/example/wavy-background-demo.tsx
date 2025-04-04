// import Background from "../ExWavy";

// export default function WavyBackgroundDemo({setIsopen}: {setIsopen: () => void}) {
//   return (
//     <div className="h-screen">
//       <Background />
//       <div className="flex flex-col align-center justify-center absolute z-100 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
//         <p className="text-4xl md:text-5xl lg:text-7xl text-black inter-var text-center font-julius font-bold w-[100vw]">
//           Big solutions for <br />
//           bold visions
//         </p>
//       </div>
//       <div className="flex flex-col items-center justify-center absolute z-100 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
//         <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center w-[80vw]">
//           We create innovative AI soloution that transforms <br />
//           businesses worldwide
//         </p>

//         <div className="flex flex-col items-end justify-center px-7 py-3 rounded-full mt-8 border border-[#5E5E5E] cursor-pointer hover:scale-95 transition-all">
//           <p onClick={setIsopen} className="font-julius text-sm md:text-3xl text-[#504d4d]">Contact Us</p>
//         </div>

//       </div>

//     </div>
//   );
// }

// Don't forget to import Background component
import Background from "../ExWavy";

interface WavyBackgroundDemoProps {
  setIsopen: () => void;
}

export default function WavyBackgroundDemo({
  setIsopen,
}: WavyBackgroundDemoProps) {
  return (
    <div className="h-screen">
      <Background />
      <div className="flex flex-col align-center justify-center absolute z-100 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
        <p className="text-4xl md:text-5xl lg:text-7xl text-black inter-var text-center font-julius w-[100vw]">
          Big solutions for <br />
          bold visions
        </p>
      </div>
      <div className="flex flex-col items-center justify-center absolute z-100 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center w-[80vw]">
          We create innovative AI solutions that transforms <br />
          businesses worldwide
        </p>

        <div
          className="flex flex-col items-end justify-center px-7 py-3 rounded-full mt-8 border border-secondary cursor-pointer transition-all hover:border-accent2 hover:text-accent2 hover:scale-105 duration-50"
          onClick={setIsopen}
        >
          <p className="font-julius text-sm md:text-3xl">Contact Us</p>
        </div>
      </div>
    </div>
  );
}
