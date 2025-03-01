// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function Background() {
//   const wave1 = useRef(null);
//   const wave2 = useRef(null);
//   const wave3 = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
      
//       gsap.to(wave1.current, {
//         attr: { d: "M0,160 Q360,200 720,160 T1440,160" },
//         repeat: -1,
//         yoyo: true,
//         duration: 4.5,
//         ease: "sine.out",
//       });
  
//       gsap.to(wave2.current, {
//         attr: { d: "M0,180 Q360,120 720,180 T1440,180" },
//         repeat: -1,
//         yoyo: true,
//         duration: 5,
//         ease: "sine.in",
//       });
  
//       gsap.to(wave3.current, {
//         attr: { d: "M0,130 Q360,80 720,140 T1440,290" },
//         repeat: -1,
//         yoyo: true,
//         duration: 5,
//         ease: "power1.inOut",
//       });
//     })

//     return () => ctx.revert()
//   }, []);

//   return (
//     <div className="relative w-full flex items-center justify-center overflow-hidden h-screen">
//       <svg viewBox="0 0 1440 320" className="absolute w-full h-auto">
//         <path
//           ref={wave2}
//           fill="none"
//           stroke="#b5b3ff"
//           strokeWidth="2"
//           opacity="0.6"
//           d="M0,160 Q360,100 720,160 T1440,120"
//         />
//         <path
//           ref={wave1}
//           fill="none"
//           stroke="#c3f4ff"
//           strokeWidth="2"
//           opacity="0.6"
//           d="M0,160 Q360,100 720,160 T1440,130"
//         />
//         <path
//           ref={wave1}
//           fill="none"
//           stroke="#f5c8ff"
//           strokeWidth="2"
//           opacity="0.6"
//           d="M0,160 Q360,100 720,160 T1440,160"
//         />
//       </svg>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Background() {
  const wave1 = useRef(null);
  const wave2 = useRef(null);
  const wave3 = useRef(null);

  useEffect(() => {
    const animateWaves = (target, duration) => {
      gsap.to(target, {
        x: "-50%", // Moves left to create an infinite loop
        duration: duration,
        ease: "linear",
        repeat: -1,
      });
    };

    animateWaves(wave1.current, 8);
    animateWaves(wave2.current, 10);
    animateWaves(wave3.current, 12);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden h-screen">
      <svg viewBox="0 0 1440 320" className="absolute w-full h-auto">
        {/* Wave 1 (Duplicated for seamless looping) */}
        <g ref={wave1} className="wave">
          <path
            fill="none"
            stroke="#b5b3ff"
            strokeWidth="2"
            opacity="0.6"
            d="M0,160 Q360,200 720,160 T1440,160"
          />
          <path
            fill="none"
            stroke="#b5b3ff"
            strokeWidth="2"
            opacity="0.6"
            d="M1440,160 Q1800,200 2160,160 T2880,160"
          />
        </g>

        {/* Wave 2 (Duplicated for seamless looping) */}
        <g ref={wave2} className="wave">
          <path
            fill="none"
            stroke="#c3f4ff"
            strokeWidth="2"
            opacity="0.5"
            d="M0,180 Q360,120 720,180 T1440,180"
          />
          <path
            fill="none"
            stroke="#c3f4ff"
            strokeWidth="2"
            opacity="0.5"
            d="M1440,180 Q1800,120 2160,180 T2880,180"
          />
        </g>

        {/* Wave 3 (Duplicated for seamless looping) */}
        <g ref={wave3} className="wave">
          <path
            fill="none"
            stroke="#f5c8ff"
            strokeWidth="2"
            opacity="0.4"
            d="M0,130 Q360,80 720,140 T1440,290"
          />
          <path
            fill="none"
            stroke="#f5c8ff"
            strokeWidth="2"
            opacity="0.4"
            d="M1440,130 Q1800,80 2160,140 T2880,290"
          />
        </g>
      </svg>
    </div>
  );
}
