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
    const animateWaves = ({target, duration}: {target: any, duration: any}) => {
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


// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

// interface SparkleProps {
//   id: string;
//   createdAt: number;
//   color: string;
//   size: number;
//   style: React.CSSProperties;
// }

// interface SparklesPreviewProps {
//   className?: string;
//   children?: React.ReactNode;
//   isEnabled?: boolean;
// }

// const DEFAULT_COLOR = "#FFF";
// const MIN_SIZE = 10;
// const MAX_SIZE = 20;
// const MIN_OFFSET = -150;
// const MAX_OFFSET = 150;

// const random = (min: number, max: number): number => 
//   Math.floor(Math.random() * (max - min)) + min;

// const useRandomInterval = (
//   callback: () => void,
//   minDelay: number | null,
//   maxDelay: number | null
// ) => {
//   const timeoutId = useRef<number | null>(null);
//   const savedCallback = useRef(callback);

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     if (minDelay === null || maxDelay === null) return;

//     const handleTick = () => {
//       const nextTickAt = random(minDelay, maxDelay);
//       timeoutId.current = window.setTimeout(() => {
//         savedCallback.current();
//         handleTick();
//       }, nextTickAt);
//     };

//     handleTick();

//     return () => {
//       if (timeoutId.current) {
//         window.clearTimeout(timeoutId.current);
//       }
//     };
//   }, [minDelay, maxDelay]);
// };

// const generateSparkle = (color: string = DEFAULT_COLOR): SparkleProps => {
//   return {
//     id: String(random(10000, 99999)),
//     createdAt: Date.now(),
//     color,
//     size: random(MIN_SIZE, MAX_SIZE),
//     style: {
//       top: random(MIN_OFFSET, MAX_OFFSET),
//       left: random(MIN_OFFSET, MAX_OFFSET),
//       zIndex: 2,
//     },
//   };
// };

// const Sparkle: React.FC<SparkleProps> = ({ color, size, style }) => {
//   const path =
//     "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 70 34 70C34 70 35.6597 50.7065 43.5 43.5C51.6455 35.9371 71 34 71 34C71 34 51.6947 33.5565 43.5 25.5C36.5605 18.6672 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

//   return (
//     <motion.svg
//       width={size}
//       height={size}
//       viewBox="0 0 68 68"
//       fill="none"
//       style={style}
//       className="absolute"
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//     >
//       <path d={path} fill={color} />
//     </motion.svg>
//   );
// };

// const SparklesPreview: React.FC<SparklesPreviewProps> = ({ 
//   className,
//   children,
//   isEnabled = true,
// }) => {
//   const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

//   useRandomInterval(
//     () => {
//       const sparkle = generateSparkle();
//       const now = Date.now();
//       const nextSparkles = sparkles.filter(sp => {
//         const delta = now - sp.createdAt;
//         return delta < 750;
//       });

//       nextSparkles.push(sparkle);
//       setSparkles(nextSparkles);
//     },
//     isEnabled ? 50 : null,
//     isEnabled ? 450 : null
//   );

//   return (
//     <div className={cn("relative inline-block", className)}>
//       {sparkles.map(sparkle => (
//         <Sparkle
//           key={sparkle.id}
//           color={sparkle.color}
//           size={sparkle.size}
//           style={sparkle.style}
//           id={sparkle.id}
//           createdAt={sparkle.createdAt}
//         />
//       ))}
//       <div className="relative z-1">{children}</div>
//     </div>
//   );
// };

// export default SparklesPreview;
