import {
  IconBrandMedium,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";
import React, { useMemo } from "react";
import { cn } from "./utils/cn";
import { Linkedin } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUsModal from "./components/ui/ContactPopup";

export default function Blogs() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="max-w-[1200px] mx-auto h-fit px-5 py-40">
        <Navbar bgColor="#fff" />
        <p className="lg:text-5xl text-xl font-semibold max-w-[1080px] text-gray-400 font-julius">
          Our Blogs
        </p>
        <FeaturesSection />
      </div>
      <ContactUsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer setShowModal={setShowModal} />
    </>
  );
}

const features = [
  {
    title: "35%",
    description: " Improvement in first-call resolution rates. ",
    icon: <IconTerminal2 />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: "25%",
    description: "Increase in customer satisfaction scores. ",
    icon: <IconEaseInOut />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: "Significant reduction",
    description:
      "Significant reduction in agent training time and operational costs. ",
    icon: <IconCurrencyDollar />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: `Enhanced ability`,
    description: `Enhanced ability to predict and address customer needs proactively. 
`,
    icon: <IconCloud />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: "35%",
    description: " Improvement in first-call resolution rates. ",
    icon: <IconTerminal2 />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: "25%",
    description: "Increase in customer satisfaction scores. ",
    icon: <IconEaseInOut />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: "Significant reduction",
    description:
      "Significant reduction in agent training time and operational costs. ",
    icon: <IconCurrencyDollar />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
  {
    title: `Enhanced ability`,
    description: `Enhanced ability to predict and address customer needs proactively. 
`,
    icon: <IconCloud />,
    image: () => (
      <img
        src="https://veritech.ai/static/media/blog_7.97956a4aa933e6504e08.png"
        className="h-40 w-full mb-2"
      />
    ),
  },
];
function FeaturesSection() {
  const Feature = useMemo(
    () =>
      ({
        title,
        description,
        image,
        index,
      }: {
        title: string;
        description: string;
        icon: React.ReactNode;
        index: number;
        image: () => React.ReactNode;
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
              {image && image()}
              <span className="group-hover/feature:translate-x-2 text-3xl transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                {title}
              </span>
            </div>
            <p
              className="text-xl text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
              style={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>

            {/* Social Icons (Hidden by default, visible on hover) */}
            <div className="absolute items-center inset-1 flex gap-7 opacity-0 h-[calc(100%-2px)] z-20 justify-center group-hover/feature:opacity-100 w-[calc(100%-2px)] transition duration-300 backdrop-blur-sm">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={45}
                  className="text-3xl md:text-4xl text-blue-600 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandMedium
                  size={45}
                  className="text-3xl md:text-4xl text-black dark:text-white hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
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
