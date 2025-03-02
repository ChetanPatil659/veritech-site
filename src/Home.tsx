import "./App.css";
import WavyBackgroundDemo from "./components/example/wavy-background-demo";
import RevealText from "./components/ui/RevealText";
import StackAnimation from "./components/StackAnimation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionNumber from "./components/ui/SectionNumber";
import { TestimonialsSection } from "./components/TestimonialSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./components/ui/Accordion";
import ContactUsModal from "./components/ui/ContactPopup";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Register ScrollTrigger with GSAP
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#main", {
        backgroundColor: "#023e8a", // target background color
        color: "#fff",
        duration: 0.35, // duration of the color transition
        scrollTrigger: {
          trigger: "#industry-excellence", // trigger the animation when this element is in view
          start: "top 50%", // when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // when the bottom of the element is 30% from the top of the viewport
          // scrub: true, // smooth scrubbing of the animation based on scroll
          markers: false, // set to true to see the start and end markers for debugging
          toggleActions: "play reverse play reverse",
        },
      });

      // gsap.from("#main", {
      //   backgroundColor: "#03045E", // target background color
      //   duration: 1, // duration of the color transition
      //   scrollTrigger: {
      //     trigger: ".white", // trigger the animation when this element is in view
      //     start: "top 40%", // when the top of the element is 80% from the top of the viewport
      //     end: "top top", // when the bottom of the element is 30% from the top of the viewport
      //     scrub: true, // smooth scrubbing of the animation based on scroll
      //     markers: true, // set to true to see the start and end markers for debugging
      //   },
      // });

      // ScrollTrigger.create({
      //   trigger: "#case-studies-card",
      //   start: "top 10%",
      //   end: "bottom 70%",
      //   pin: "#case-studies",
      //   markers: false,
      //   scrub: true,
      // });
    });

    return () => ctx.revert();
    // ScrollTrigger animation when the #industry-excellence section comes into view
  }, []);

  return (
    <div id="main" className="bg-[#fff]">

      <Navbar />
      {/* <div className="h-12"/> */}
      <WavyBackgroundDemo setIsopen={() => setShowModal(true)} />
      
      <RevealText />
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="flex flex-col items-center justify-center"
      >
        {/* <div className="flex flex-row items-center gap-3 pb-2 border-b-4 border-[#ADA7C9] w-2/3">
          <div className="flex flex-col items-center justify-center bg-[#ADA7C9] aspect-square p-3 text-white rounded-full h-8 md:h-[40px]">
            1
          </div>
          <p className="font-julius text-3xl">Solutions</p>
        </div> */}
        <SectionNumber number="1" text="Industry Excellence" type="light" />
        <StackAnimation />
      </div>
      {/* <div className="h-[30vh]" /> */}
      <div
        id="industry-excellence"
        style={{ width: "100vw" }}
        className="flex flex-col items-center mt-16"
      >
        <div className="md:mt-40 mt:20 w-full" />
        <SectionNumber
          number="2"
          text="Industry Excellence"
          type="dark"
        />

        <div className="flex flex-row items-center gap-3 pb-2 w-4/5 md:w-[60%] md:mt-24 mt-10">
          <p className="font-julius text-lg md:text-2xl            text-pretty opacity-75">
            At Veritech, we are proud to have worked with some of the biggest
            names in the industry. Our solutions have helped businesses to
            optimize their workflows and boost their productivity.
          </p>
        </div>

        <div className="pb-2 w-4/5 md:w-2/3 mt-16 md:mt-32 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold"></p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              BYJU'S
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              toppr
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              Cyber Square
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              cuemath
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              Sharda University
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              Skill Lync
            </p>
            <p className="font-julius text-xl md:text-2xl text-center text-white text-pretty font-bold">
              Whitehat Jr
            </p>
          </div>
        </div>

        <div className="mt-32 w-full" />
        {/* <SectionNumber number="2" text="Industry Excellence" type="dark" /> */}
        {/* <div className="mt-16 w-full" /> */}
        <SectionNumber
          number="3"
          text="Case Studies"
          type="dark"
        />
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between pb-2 w-screen">
            <StickyScroll
              content={[
                {
                  title:
                    "1. Transforming Telecom Customer Support with Veritech.ai",
                  description: `The telecom industry is characterized by high volumes of customer interactions, operational 
                      complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
                      Customer Interaction Platform addresses these challenges by enhancing customer experience, 
                      streamlining workflows, and empowering agents with advanced tools.`,
                  content: (
                    <div className="h-full w-full bg-emerald-500 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue: '1. Transforming Telecom Customer Support with Veritech.ai'
                },
                {
                  title:
                    "2. Transforming Telecom Customer Support with Veritech.ai",
                  description: `The telecom industry is characterized by high volumes of customer interactions, operational 
                      complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
                      Customer Interaction Platform addresses these challenges by enhancing customer experience, 
                      streamlining workflows, and empowering agents with advanced tools.`,
                  content: (
                    <div className="h-full w-full bg-cyan-500 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue: '2. Transforming Telecom Customer Support with Veritech.ai'
                },
                {
                  title:
                    "3. Transforming Telecom Customer Support with Veritech.ai",
                  description: `The telecom industry is characterized by high volumes of customer interactions, operational 
                      complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
                      Customer Interaction Platform addresses these challenges by enhancing customer experience, 
                      streamlining workflows, and empowering agents with advanced tools.`,
                  content: (
                    <div className="h-full w-full bg-red-300 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue: '3. Transforming Telecom Customer Support with Veritech.ai'
                },
              ]}
            />
        </div>

        <div className="mt-32 w-full" />
        <SectionNumber number="4" text="Trusted By Clients" type="dark" />

        <TestimonialsSection />
      </div>
      <div className="mt-32 w-full" />
      <div className="flex flex-col items-center w-full justify-center">
      <SectionNumber
          number="5"
          text="FAQ's"
          type="light"
        />
        <div className="mt-12 w-full" />
        <Accordion
          type="single"
          collapsible
          className="md:w-2/3 w-4/5 "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold" >
              Ecommerce
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              Financial Services
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              Insurance
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              HealthTech Solutions
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              EdTech Solutions
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Enhance customer experience in the telecom industry with our
              AI-Powered Unified Customer Interaction Platform. Semantic
              Intelligence on Interactions ensures precise and effective call
              handling
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="white h-[80vh] w-screen flex items-center justify-center">
        <div className="h-1/2 w-screen flex flex-col items-center justify-center">
          <div className="flex flex-col align-center justify-center">
            <p className="text-xl md:text-4xl lg:text-5xl inter-var text-center font-julius font-semibold">
              Revolutionize Customer Experience with Smart Solutions
            </p>
          </div>
          <div onClick={() => setShowModal(true)} className="flex flex-col items-end justify-center px-7 py-3 rounded-full mt-8 border border-[#5E5E5E] cursor-pointer hover:scale-95 transition-all">
            <p className="font-julius text-sm md:text-3xl text-[#504d4d]">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      
      {/* <Background/> */}
      <ContactUsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </div>
  );
}

export default Home;
