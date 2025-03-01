import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "./components/Footer";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { cn } from "./utils/cn";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { useMemo } from "react";

export default function SolutionDetails() {
  const { solution } = useParams();
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto h-fit px-5 py-40">
        <p className="lg:text-5xl text-xl font-semibold max-w-[1080px] text-gray-400 font-julius">
          {solution}
        </p>
        <img
          src="https://veritech.ai/static/media/telecom.4a1a363b8aaed20542d5.jpg"
          className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover my-10 rounded-lg"
        />

        <p className="lg:text-4xl text-lg font-semibold max-w-[1080px] text-gray-400 flex items-center gap-3">
          {" "}
          <ArrowRight className="text-gray-400 lg:w-8 lg:h-8 w-4 h-4" />{" "}
          Overview
        </p>
        <p className="p-4 text-base font-julius font-bold text-gray-700 max-w-[1080px]">
          The telecom industry is characterized by high volumes of customer
          interactions, operational complexities, and a need for exceptional
          service delivery. Veritech.ai’s AI-Powered Unified Customer
          Interaction Platform addresses these challenges by enhancing customer
          experience, streamlining workflows, and empowering agents with
          advanced tools.
        </p>

        <p className="lg:text-4xl text-lg font-semibold max-w-[1080px] text-gray-400 flex items-center gap-3 mt-5">
          {" "}
          <ArrowRight className="text-gray-400 lg:w-8 lg:h-8 w-4 h-4" /> Client
          Challenge
        </p>

        <p className="p-4 text-base font-julius font-bold text-gray-700 max-w-[1080px]">
          A leading telecom provider faced challenges in managing increasing
          call volumes, inconsistent service quality, and operational
          inefficiencies. The existing system lacked the capabilities to provide
          real-time insights, tailored agent support, and comprehensive
          analytics, which resulted in lower customer satisfaction scores and
          higher operational costs.
        </p>

        <div className="w-full mx-auto">
          <p className="lg:text-2xl text-lg font-semibold text-gray-400 flex items-center gap-3 mt-10">
            {" "}
            Solution Provided by Veritech.ai
          </p>
          <HoverEffect items={projects} />
        </div>

        <div className="w-full mx-auto">
          <p className="lg:text-2xl text-lg font-semibold text-gray-400 flex items-center gap-3 mt-10">
            {" "}
            Results Achieved
          </p>
          <FeaturesSection />
        </div>

        <p className="lg:text-4xl text-lg font-semibold max-w-[1080px] text-gray-400 flex items-center gap-3">
          {" "}
          <ArrowRight className="text-gray-400 lg:w-8 lg:h-8 w-4 h-4" />{" "}
          Conclusion
        </p>
        <p className="p-4 text-base font-julius font-bold text-gray-700 max-w-[1080px]">
          With Veritech.ai’s AI-powered solutions, the telecom company
          transformed its customer support operations, achieving superior
          service quality, operational efficiency, and heightened customer
          satisfaction.
        </p>
      </div>
      <Footer />
    </div>
  );
}

const projects = [
  {
    title: "Semantic Intelligence on Interactions ",
    description: `Veritech.ai’s platform analyzed customer calls to identify common issues and trends. 
Real-time insights empowered agents to resolve queries faster and with greater 
accuracy, leading to improved first-call resolution rates.`,
  },
  {
    title: "Agent Empowerment Suite ",
    description: `Customized training modules and upskilling tools helped agents handle complex queries 
effectively. The suite ensured consistent service quality and boosted agent confidence 
and productivity. `,
  },
  {
    title: `Comprehensive Reporting and Analytics 
The telecom company leveraged detailed das`,
    description: `The telecom company leveraged detailed dashboards and analytics to track 
performance metrics such as call resolution times and customer satisfaction scores. 
These insights enabled the team to optimize workflows and make informed decisions. `,
  },
  {
    title: "Seamless Integration and Robust Data Privacy ",
    description: `The AI platform was integrated with the client’s existing CRM systems without disrupting 
operations. Advanced data privacy measures ensured the security of sensitive customer 
information, building trust and compliance with industry regulations. `,
  },
];

const features = [
  {
    title: "35%",
    description: " Improvement in first-call resolution rates. ",
    icon: <IconTerminal2 />,
  },
  {
    title: "25%",
    description: "Increase in customer satisfaction scores. ",
    icon: <IconEaseInOut />,
  },
  {
    title: "Significant reduction",
    description:
      "Significant reduction in agent training time and operational costs. ",
    icon: <IconCurrencyDollar />,
  },
  {
    title: `Enhanced ability`,
    description: `Enhanced ability to predict and address customer needs proactively. 
`,
    icon: <IconCloud />,
  },
];
function FeaturesSection() {
  const Feature = useMemo(
    () =>
      ({
        title,
        description,
        icon,
        index,
      }: {
        title: string;
        description: string;
        icon: React.ReactNode;
        index: number;
      }) => {
        return (
          <div
            className={cn(
              "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
              (index === 0 || index === 4) &&
                "lg:border-l dark:border-neutral-800",
              index < 4 && "lg:border-b dark:border-neutral-800"
            )}
          >
            {index < 4 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#b5b3ff] transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 text-xl transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                {title}
              </span>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
              {description}
            </p>
          </div>
        );
      },
    []
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
