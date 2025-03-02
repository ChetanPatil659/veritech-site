import React from "react";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import Navbar from "./components/Navbar";
import Background from "./components/ExWavy";
import Footer from "./components/Footer";


export default function Solutions() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="max-w-[1200px] mx-auto h-fit py-40 px-5 overflow-y-hidden">
        <p className="lg:text-5xl text-xl font-semibold mb-6 text-gray-400">
          {"Case Studies"}
        </p>
        <BentoGrid className="max-w-[1440px] mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
      <Footer/>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Transforming Telecom Customer Support with Veritech.ai ",
    description: `The telecom industry is characterized by high volumes of customer interactions, operational 
complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
Customer Interaction Platform addresses these challenges by enhancing customer experience, 
streamlining workflows, and empowering agents with advanced tools.  `,
    header: <Skeleton />,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: `Transforming Ecommerce Customer Engagement with 
Veritech.ai `,
    description: `The ecommerce industry thrives on delivering personalized customer experiences and efficient 
service. Veritech.ai’s AI-Powered Unified Customer Interaction Platform addresses key 
challenges in ecommerce by enhancing customer engagement, empowering support teams, 
and delivering actionable insights to improve operational efficiency.`,
    header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Enhancing Financial Services with Veritech.ai",
    description: `The financial services industry prioritizes trust, security, and efficiency in customer interactions. 
Veritech.ai’s AI-powered solutions empower financial institutions to deliver exceptional customer 
experiences while maintaining stringent security standards.`,
    header: <Skeleton />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Revolutionizing Insurance Operations with Veritech.ai  ",
    description: `The insurance sector demands efficiency and accuracy, especially in claim processing and 
customer interactions. Veritech.ai’s AI-powered solutions empower insurance companies to 
enhance customer service, streamline operations, and maintain high standards of data security. `,
    header: <Skeleton />,
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: `Transforming Patient Engagement for Healthtech with 
Veritech.ai`,
    description: `In the healthtech sector, effective communication and secure patient interaction are critical. 
Veritech.ai’s advanced AI platform enables healthtech companies to enhance patient 
engagement, streamline workflows, and maintain data privacy compliance, ultimately improving 
healthcare outcomes.`,
    header: <Skeleton />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: ` Enhancing Educational Support for Edtech Companies with 
Veritech.ai `,
    description: `In the competitive edtech landscape, providing exceptional support to students and parents is 
crucial for ensuring learning success and satisfaction. Veritech.ai’s AI-Powered Unified 
Customer Interaction Platform empowers edtech companies to optimize their support services, 
enhance student engagement, and uphold data privacy standards.`,
    header: <Skeleton />,
    // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: `Streamlining Recruitment for Staffing Companies with 
Veritech.ai`,
    description: `In the fast-paced recruiting and staffing industry, efficiency and precision in matching candidates 
to job roles are critical. Veritech.ai’s AI-Powered Unified Customer Interaction Platform helps 
staffing firms optimize recruitment processes, enhance candidate engagement, and improve 
operational outcomes.`,
    header: <Skeleton />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


