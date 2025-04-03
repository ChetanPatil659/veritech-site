"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const Testimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative gap-20">
        <div>
          <div className="relative h-80 w-[80vw] md:w-[50vw]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 40,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div
                    className={`${
                      active === index
                        ? "bg-accent border-2 border-secondary"
                        : "bg-accent2 border-2 border-primary"
                    } flex flex-col items-end justify-between rounded-3xl p-12 h-full md:h-full w-full overflow-hidden`}
                  >
                    <div className="flex flex-row">
                      <Quote size={50} color="#F8F8F8" />
                      <motion.p
                        className="text-lg text-secondary mt-6 md:mt-8"
                        style={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {testimonials[active].quote
                          .split(" ")
                          .map((word, index) => (
                            <motion.span
                              key={index}
                              initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.02 * index,
                              }}
                              className="inline-block"
                            >
                              {word}&nbsp;
                            </motion.span>
                          ))}
                      </motion.p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white text-left">
                        {testimonials[active].name}
                      </h3>
                      <p className="text-sm text-secondary text-left">
                        {testimonials[active].designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 z-40 mt-20 px-10">
        <button
          onClick={handlePrev}
          className="h-8 aspect-square rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="h-8 aspect-square rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
