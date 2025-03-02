// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/Accordion.tsx";
// import ExpandableCardDemo from "./expandable-card-demo-standard.tsx";

// export default function StackAnimation() {
//   const [stack, setStack] = React.useState([false, false, false, false, false]);
//   const [stackOutline, setStackOutline] = React.useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const stackOpen =
//     "M271.033 1L540 132.446V285.747L273.163 419L1 285.747V132.446L271.033 1Z";
//   const stackClose =
//     "M271.033 1L540 132.446V185.747L273.163 319L1 185.747V132.446L271.033 1Z";

//   const handleAnimation = (idx: number) => {
//     if (!stack[idx]) {
//       setStack(() => {
//         let temp = [false, false, false, false, false];
//         temp[idx] = true;
//         return temp;
//       });
//       setTimeout(() => {
//         setStackOutline(() => {
//           let temp = [false, false, false, false, false];
//           temp[idx] = true;
//           return temp;
//         });
//       }, 200);
//     } else {
//       setStackOutline(() => {
//         return [false, false, false, false, false];
//       });
//       setTimeout(() => {
//         setStack(() => {
//           return [false, false, false, false, false];
//         });
//       }, 600);
//     }
//   };

//   return (
//     <div className="flex items-center w-full justify-center p-4 overflow-hidden">
//       <div className="hidden lg:block scale-[0.7]" id="stack">
//         {stack.map((_, index) => (
//           <svg
//             key={index}
//             width="541"
//             height={stack[index] ? "420" : "320"}
//             fill="none"
//             style={{
//               transition: "all 0.65s ease-in-out",
//               marginTop: index === 0 ? "0" : "-240px",
//               zIndex: 5 - index,
//               position: "relative",
//             }}
//           >
//             {/* Lines */}
//             <path
//               className="line"
//               d="M243.337 253.503L270.5 265.699L526.685 141.932"
//               stroke="#050505"
//               strokeOpacity={stack[index] ? "0" : "0.6"}
//               style={{ transition: "all 0.5s ease-in-out" }}
//             />
//             <path
//               className="line"
//               d="M12.7174 139.222L42.5435 154.58"
//               stroke="#050505"
//               strokeOpacity={stack[index] ? "0" : "0.6"}
//               style={{ transition: "all 0.5s ease-in-out" }}
//             />
//             <path
//               className="line"
//               d="M46.8043 156.386L51.0652 158.645"
//               stroke="#050505"
//               strokeOpacity={stack[index] ? "0" : "0.6"}
//               style={{ transition: "all 0.5s ease-in-out" }}
//             />
//             <path
//               className="line"
//               d="M54.2609 160L224.163 242.662"
//               stroke="#050505"
//               strokeOpacity={stack[index] ? "0" : "0.6"}
//               style={{ transition: "all 0.5s ease-in-out" }}
//             />
//             <path
//               className="line"
//               d="M270.5 273.83V311.321"
//               stroke="#050505"
//               strokeOpacity={stack[index] ? "0" : "0.6"}
//               style={{ transition: "all 0.5s ease-in-out" }}
//             />

//             {/* Outline */}
//             <path
//               className=""
//               d={stackOutline[index] ? stackOpen : stackClose}
//               stroke={stackOutline[index] ? "#5E548E" : "#050505"}
//               strokeOpacity="0.6"
//               fill={stackOutline[index] ? "#ADA7C9" : "#D9D9D9"}
//               fillOpacity={stackOutline[index] ? "1" : "0.25"}
//               style={{ transition: "all 1.5s ease-in-out" }}
//             />
//           </svg>
//         ))}
//       </div>

//       <div className="md:w-1/2 w-4/5 flex justify-center">
//         <ExpandableCardDemo cards={cards}/>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import ExpandableCardDemo from "./expandable-card-demo-standard";

interface Card {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}

const STACK_SIZE = 5;
const INITIAL_STATE = Array(STACK_SIZE).fill(false);

const stackPaths = {
  open: "M271.033 1L540 132.446V285.747L273.163 419L1 285.747V132.446L271.033 1Z",
  close: "M271.033 1L540 132.446V185.747L273.163 319L1 185.747V132.446L271.033 1Z"
};

export default function StackAnimation(): JSX.Element {
  const [stack, setStack] = useState<boolean[]>(INITIAL_STATE);
  const [stackOutline, setStackOutline] = useState<boolean[]>(INITIAL_STATE);

  const handleAnimation = (idx: number): void => {
    if (!stack[idx]) {
      setStack(() => {
        const temp = Array(STACK_SIZE).fill(false);
        temp[idx] = true;
        return temp;
      });
      
      setTimeout(() => {
        setStackOutline(() => {
          const temp = Array(STACK_SIZE).fill(false);
          temp[idx] = true;
          return temp;
        });
      }, 200);
    } else {
      setStackOutline(() => Array(STACK_SIZE).fill(false));
      
      setTimeout(() => {
        setStack(() => Array(STACK_SIZE).fill(false));
      }, 600);
    }
  };

  return (
    <div className="flex items-center w-full justify-center p-4 overflow-hidden">
      <div className="hidden lg:block scale-[0.7]" id="stack">
        {stack.map((_, index) => (
          <svg
            key={index}
            width="541"
            height={stack[index] ? "420" : "320"}
            fill="none"
            style={{
              transition: "all 0.65s ease-in-out",
              marginTop: index === 0 ? "0" : "-240px",
              zIndex: 5 - index,
              position: "relative",
            }}
          >
            {/* Lines */}
            <path
              className="line"
              d="M243.337 253.503L270.5 265.699L526.685 141.932"
              stroke="#050505"
              strokeOpacity={stack[index] ? "0" : "0.6"}
              style={{ transition: "all 0.5s ease-in-out" }}
            />
            <path
              className="line"
              d="M12.7174 139.222L42.5435 154.58"
              stroke="#050505"
              strokeOpacity={stack[index] ? "0" : "0.6"}
              style={{ transition: "all 0.5s ease-in-out" }}
            />
            <path
              className="line"
              d="M46.8043 156.386L51.0652 158.645"
              stroke="#050505"
              strokeOpacity={stack[index] ? "0" : "0.6"}
              style={{ transition: "all 0.5s ease-in-out" }}
            />
            <path
              className="line"
              d="M54.2609 160L224.163 242.662"
              stroke="#050505"
              strokeOpacity={stack[index] ? "0" : "0.6"}
              style={{ transition: "all 0.5s ease-in-out" }}
            />
            <path
              className="line"
              d="M270.5 273.83V311.321"
              stroke="#050505"
              strokeOpacity={stack[index] ? "0" : "0.6"}
              style={{ transition: "all 0.5s ease-in-out" }}
            />

            {/* Outline */}
            <path
              d={stackOutline[index] ? stackPaths.open : stackPaths.close}
              stroke={stackOutline[index] ? "#5E548E" : "#050505"}
              strokeOpacity="0.6"
              fill={stackOutline[index] ? "#ADA7C9" : "#D9D9D9"}
              fillOpacity={stackOutline[index] ? "1" : "0.25"}
              style={{ transition: "all 1.5s ease-in-out" }}
            />
          </svg>
        ))}
      </div>

      <div className="md:w-1/2 w-4/5 flex justify-center">
        <ExpandableCardDemo cards={cards} handleAnimation={handleAnimation} />
      </div>
    </div>
  );
}

const cards: Card[] = [
  {
    description: `Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling`,
    title: "Ecommerce",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: `Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling`,
    title: "Financial Services",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: `Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling`,
    title: "Insurance",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: `Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling`,
    title: "HealthTech Solutions",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Use Case: Fraud Detection and Prevention
Semantic Intelligence on Interactions: Monitors customer interactions for signs of fraudulent activity and alerts agents.
Agent Empowerment Suite: Provides agents with tools and knowledge to address security concerns and educate customers on fraud prevention.
Comprehensive Reporting and Analytics: Analyzes interaction data to identify patterns and trends in fraudulent behavior.
Easy Integration and Data Privacy: Ensures seamless integration with financial systems and adheres to strict data security standards.
Industry Insights
Fraud Detection and Customer Support: AI-powered platforms are crucial for fraud detection and personalized customer support. Comprehensive reporting and analytics can identify unusual patterns and flag potential fraud, while semantic intelligence can improve customer interactions, leading to higher satisfaction and trust.
Market Growth: AI is pivotal in transforming financial services by enhancing customer interactions and ensuring data security. According to PwC, AI can enhance fraud detection, personalize customer experiences, and streamline regulatory compliance. Semantic intelligence analyzes vast amounts of interaction data to detect anomalies and prevent fraud, while AI-driven analytics provide deep insights into customer behavior, enabling personalized financial advice and services【PwC】.
Use Case: Fraud Detection and Prevention
Semantic Intelligence on Interactions: Monitors customer interactions for signs of fraudulent activity and alerts agents.
Agent Empowerment Suite: Provides agents with tools and knowledge to address security concerns and educate customers on fraud prevention.
Comprehensive Reporting and Analytics: Analyzes interaction data to identify patterns and trends in fraudulent behavior.
Easy Integration and Data Privacy: Ensures seamless integration with financial systems and adheres to strict data security standards.
Industry Insights
Fraud Detection and Customer Support: AI-powered platforms are crucial for fraud detection and personalized customer support. Comprehensive reporting and analytics can identify unusual patterns and flag potential fraud, while semantic intelligence can improve customer interactions, leading to higher satisfaction and trust.
Market Growth: AI is pivotal in transforming financial services by enhancing customer interactions and ensuring data security. According to PwC, AI can enhance fraud detection, personalize customer experiences, and streamline regulatory compliance. Semantic intelligence analyzes vast amounts of interaction data to detect anomalies and prevent fraud, while AI-driven analytics provide deep insights into customer behavior, enabling personalized financial advice and services【PwC】.
        </p>
      );
    },
  },
  {
    description: `Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling`,
    title: "EdTech Solutions",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];