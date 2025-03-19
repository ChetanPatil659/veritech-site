// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RevealText = () => {
//   const divRef = useRef(null);

//   useEffect(() => {
//     const element = divRef.current;

//     gsap.fromTo(
//       element,
//       { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }, // Starting state (zero)
//       {
//         clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)", // Full rectangle (ending state)
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: element,
//           start: "80% bottom", // Start when the element comes into the viewport
//           end: "bottom 80%", // End when the element is fully in the viewport
//           scrub: true, // Smooth scroll effect
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="h-[80vh] w-full md:h-screen">
//       <div
//         id="text-animated"
//         ref={divRef}
//         className="flex flex-col lg:flex-row lg:items-center justify-center absolute z-50"
//         style={{ overflow: "hidden", width: "100vw", height: "100vh" }} // Ensure content does not overflow during the animation
//       >
//         <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex items-center lg:items-end justify-center lg:justify-start mb-2 lg:mb-0 p-6">
//           <h1 className="font-julius text-xl md:text-4xl font-extrabold text-center lg:text-left">
//             Transforming conversations into tomorrow's competitive edge with AI,
//             today.
//           </h1>
//         </div>

//         <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex lg:items-end justify-center lg:justify-end p-6">
//           <h1 className="font-julius text-sm md:text-xl font-extrabold text-left lg:text-right">
//             Veritech is a new-age software development company that serves
//             clients worldwide, offering support across different time zones
//             including the US, Asia Pacific, EMEA, and MENA.
//           </h1>
//         </div>
//       </div>

//       <div
//         id="text"
//         className="flex flex-col lg:flex-row items-center lg:items-center justify-center"
//         style={{ overflow: "hidden", width: "100vw", height: "100vh" }} // Ensure content does not overflow during the animation
//       >
//         <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex items-center lg:items-end justify-center lg:justify-start mb-2 lg:mb-0 p-6">
//           <h1 className="font-julius text-xl md:text-4xl font-extrabold text-center lg:text-left text-slate-300">
//             Transforming conversations into tomorrow's competitive edge with AI,
//             today.
//           </h1>
//         </div>

//         <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex lg:items-end justify-center lg:justify-end text-slate-300 p-6">
//           <h1 className="font-julius text-sm md:text-xl font-extrabold text-left lg:text-right">
//             Veritech is a new-age software development company that serves
//             clients worldwide, offering support across different time zones
//             including the US, Asia Pacific, EMEA, and MENA.
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RevealText;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface TextContentProps {
//   titleText: string;
//   descriptionText: string;
// }

// const TextContent: React.FC<TextContentProps> = ({
//   titleText,
//   descriptionText,
// }) => (
//   <>
//     <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex items-center lg:items-end justify-center lg:justify-start mb-2 lg:mb-0 p-6">
//       <h1 className="font-julius text-xl md:text-4xl font-extrabold text-center lg:text-left">
//         {titleText}
//       </h1>
//     </div>
//     <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex lg:items-end justify-center lg:justify-end p-6">
//       <h1 className="font-julius text-sm md:text-xl font-extrabold text-left lg:text-right">
//         {descriptionText}
//       </h1>
//     </div>
//   </>
// );

// const RevealText: React.FC = () => {
//   const divRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = divRef.current;

//     if (!element) return;

//     // const animation = gsap.fromTo(
//     //   '#text-animated',
//     //   {
//     //     clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)"
//     //   },
//     //   {
//     //     clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
//     //     ease: "power1.inOut",
//     //     scrollTrigger: {
//     //       trigger: element,
//     //       start: "80% bottom",
//     //       end: "bottom 80%",
//     //       scrub: true,
//     //       markers: true
//     //     },
//     //   }
//     // );

//     const animation = gsap.fromTo(
//       "#text-animated",
//       {
//         clipPath: "polygon(-150% -150%, -150% -150%, -50% 0%, -50% 0%)",
//       },
//       {
//         clipPath: "polygon(0 0, 150% 0, 150% 150%, 0% 150%)",
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: element,
//           start: "80% bottom",
//           end: "bottom 80%",
//           scrub: true,
//           markers: true,
//         },
//       }
//     );

//     return () => {
//       animation.kill();
//     };
//   }, []);

//   const contentProps = {
//     titleText:
//       "Transforming conversations into tomorrow's competitive edge with AI, today.",
//     descriptionText:
//       "Veritech is a new-age software development company that serves clients worldwide, offering support across different time zones including the US, Asia Pacific, EMEA, and MENA.",
//   };

//   const commonStyles: React.CSSProperties = {
//     overflow: "hidden",
//     width: "100vw",
//     height: "100vh",
//   };

//   return (
//     <div className="h-[80vh] w-full md:h-screen">
//       <div
//         id="text-animated"
//         ref={divRef}
//         className="flex flex-col lg:flex-row lg:items-center justify-center absolute z-50"
//         style={commonStyles}
//       >
//         <TextContent {...contentProps} />
//       </div>

//       <div
//         id="text"
//         className="flex flex-col lg:flex-row items-center text-zinc-300 lg:items-center justify-center"
//         style={commonStyles}
//       >
//         <TextContent {...contentProps} />
//       </div>
//     </div>
//   );
// };

// export default RevealText;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextContentProps {
  titleText: string;
  descriptionText: string;
}

const TextContent: React.FC<TextContentProps> = ({
  titleText,
  descriptionText,
}) => (
  <>
    <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex items-center lg:items-end justify-center lg:justify-start mb-2 lg:mb-0 p-6">
      <h1 className="font-julius text-xl md:text-4xl font-extrabold text-center lg:text-left">
        {titleText}
      </h1>
    </div>
    <div className="w-full px-4 lg:w-1/3 h-1/4 lg:h-1/3 flex lg:items-end justify-center lg:justify-end p-6">
      <h1 className="font-julius text-sm md:text-xl font-extrabold text-left lg:text-right">
        {descriptionText}
      </h1>
    </div>
  </>
);

const RevealText = () => {
  const divRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const element = divRef.current;

  //   if (!element) return;

  //   // Set initial state
  //   gsap.set(element, {
  //     clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
  //   });

  //   const animation = gsap.to(element, {
  //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: 1,
  //       markers: true,
  //     }
  //   });

  //   return () => {
  //     animation.kill();
  //   };
  // }, []);

  useEffect(() => {
    const element = divRef.current;

    if (!element) return;

      // Initially hidden at top-left
      gsap.set(element, {
        clipPath: "polygon(0 0, 0% 0%, 0% 0%)",
        opacity: 0,
      });

      const animation = gsap.to(element, {
        clipPath: "polygon(0 0, 0% 111.8vw, 111.8vw 0)", // Expands diagonally from top-left to bottom-right
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 40%", // Adjust start position
          end: "top top",
          scrub: 0.5,
        },
      });

    return () => {
      animation.kill();
    };
  }, []);

  const contentProps = {
    titleText:
      "Transforming conversations into tomorrow's competitive edge with AI, today.",
    descriptionText:
      "Veritech is a new-age software development company that serves clients worldwide, offering support across different time zones including the US, Asia Pacific, EMEA, and MENA.",
  };

  const commonStyles: React.CSSProperties = {
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="h-[80vh] w-full md:h-screen">
      <div
        id="text-animated"
        ref={divRef}
        className="flex flex-col lg:flex-row lg:items-center justify-center absolute z-50"
        style={commonStyles}
      >
        <TextContent {...contentProps} />
      </div>

      <div
        id="text"
        className="flex flex-col lg:flex-row items-center text-zinc-300 lg:items-center justify-center"
        style={commonStyles}
      >
        <TextContent {...contentProps} />
      </div>
    </div>
  );
};

export default RevealText;
