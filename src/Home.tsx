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
        backgroundColor: "#181B31", // target background color
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="main" className="bg-[#fff]">
      <Navbar bgColor="#fff" contactModal={() => setShowModal(true)} />
      {/* <div className="h-12"/> */}
      <WavyBackgroundDemo setIsopen={() => setShowModal(true)} />

      <RevealText />
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="flex flex-col items-center justify-center"
      >
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
        <SectionNumber number="2" text="Case Studies" type="dark" />

        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between pb-2 w-screen">
          {/* StickyScroll - Only visible on larger screens */}
          <div className="hidden lg:flex w-full items-center justify-center">
            <StickyScroll
              content={[
                {
                  title:
                    "1. Transforming Telecom Customer Support with Veritech.ai",
                  description: `The telecom industry is characterized by high volumes of customer
            interactions, operational complexities, and a need for exceptional
            service delivery. Veritech.ai’s AI-Powered Unified Customer
            Interaction Platform addresses these challenges by enhancing customer
            experience, streamlining workflows, and empowering agents with
            advanced tools.`,
                  content: (
                    <div className="h-full w-full bg-emerald-500 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue:
                    "Transforming Telecom Customer Support with Veritech.ai",
                },
                {
                  title:
                    "2. Revolutionizing Insurance Operations with Veritech.ai",
                  description: `The insurance sector demands efficiency and accuracy, especially in claim processing and customer interactions. Veritech.ai’s AI-powered solutions empower insurance companies to enhance customer service, streamline operations, and maintain high standards of data security.`,
                  content: (
                    <div className="h-full w-full bg-cyan-500 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue:
                    "Revolutionizing Insurance Operations with Veritech.ai",
                },
                {
                  title:
                    "3. Enhancing Educational Support for Edtech Companies with Veritech.ai",
                  description: `In the competitive edtech landscape, providing exceptional support to students and parents is crucial for ensuring learning success and satisfaction. Veritech.ai’s AI-Powered Unified Customer Interaction Platform empowers edtech companies to optimize their support services, enhance student engagement, and uphold data privacy standards.`,
                  content: (
                    <div className="h-full w-full bg-red-300 flex items-center justify-center text-white">
                      Collaborative Editing
                    </div>
                  ),
                  buttonValue:
                    "Enhancing Educational Support for Edtech Companies with Veritech.ai",
                },
              ]}
            />
          </div>

          {/* Alternative Layout for Mobile */}
          <div className="lg:hidden flex flex-col gap-4">
            {[
              {
                title:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
                description: `The telecom industry is characterized by high volumes of customer interactions, operational 
              complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
              Customer Interaction Platform addresses these challenges by enhancing customer experience, 
              streamlining workflows, and empowering agents with advanced tools.`,
                content: (
                  <div className="h-40 w-full rounded-md mb-3 bg-red-500 flex items-center justify-center text-white">
                    Collaborative Editing
                  </div>
                ),
                buttonValue:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
              },
              {
                title:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
                description: `The telecom industry is characterized by high volumes of customer interactions, operational 
              complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
              Customer Interaction Platform addresses these challenges by enhancing customer experience, 
              streamlining workflows, and empowering agents with advanced tools.`,
                content: (
                  <div className="h-40 w-full rounded-md mb-3 bg-emerald-500 flex items-center justify-center text-white">
                    Collaborative Editing
                  </div>
                ),
                buttonValue:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
              },
              {
                title:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
                description: `The telecom industry is characterized by high volumes of customer interactions, operational 
              complexities, and a need for exceptional service delivery. Veritech.ai’s AI-Powered Unified 
              Customer Interaction Platform addresses these challenges by enhancing customer experience, 
              streamlining workflows, and empowering agents with advanced tools.`,
                content: (
                  <div className="h-40 w-full rounded-md mb-3 bg-sky-500 flex items-center justify-center text-white">
                    Collaborative Editing
                  </div>
                ),
                buttonValue:
                  "1. Transforming Telecom Customer Support with Veritech.ai",
              },
            ].map((item, index) => (
              <div key={index} className={`p-4 text-white rounded-lg`}>
                {item.content}
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 w-full" />
        {/* <SectionNumber number="2" text="Industry Excellence" type="dark" /> */}
        {/* <div className="mt-16 w-full" /> */}
        <SectionNumber number="3" text="Our Clients" type="dark" />
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
        <SectionNumber number="4" text="Trusted By Clients" type="dark" />

        <TestimonialsSection />
      </div>
      <div className="mt-32 w-full" />
      <div className="flex flex-col items-center w-full justify-center">
        <SectionNumber number="5" text="FAQ's" type="light" />
        <div className="mt-12 w-full" />
        <Accordion type="single" collapsible className="w-full px-6 max-w-5xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              What types of AI solutions does Veritech offer?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Veritech offers a wide range of AI solutions, including machine
              learning, natural language processing (NLP), computer vision,
              predictive analytics, and custom AI models tailored to meet the
              specific needs of businesses across various industries. Whether
              you're looking for automation, data analysis, or advanced
              decision-making tools, we have the expertise to deliver innovative
              AI-driven solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              How can AI solutions benefit my business?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              AI solutions can significantly enhance your business operations by
              increasing efficiency, automating repetitive tasks, providing
              insightful data analysis, and enabling smarter decision-making. AI
              can also help improve customer experiences, reduce costs, and
              drive innovation. Veritech works with you to implement AI
              strategies that align with your business goals, ensuring maximum
              return on investment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              Do you provide custom AI solutions?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Yes, Veritech specializes in delivering custom AI solutions. We
              collaborate closely with our clients to understand their unique
              business challenges and design AI models that are specifically
              tailored to their needs. Whether it's optimizing internal
              processes, developing customer-facing applications, or integrating
              AI into existing systems, we create personalized solutions that
              drive success.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              How do I know if AI is right for my business?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              If you're looking to enhance efficiency, automate tasks, analyze
              large volumes of data, or improve customer engagement, AI may be
              the right solution for your business. Our team at Veritech can
              help you assess your business needs and determine how AI can be
              integrated to achieve your goals. We offer consultations and
              proof-of-concept projects to help you explore AI's potential
              before committing to a full implementation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              What industries does Veritech serve?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Veritech serves a wide range of industries, including healthcare,
              finance, retail, manufacturing, logistics, and more. Our AI
              solutions are versatile and can be applied across different
              sectors to optimize processes, improve customer experiences, and
              increase productivity. We tailor our offerings to meet the
              specific challenges and opportunities in each industry.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              How long does it take to implement an AI solution?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              The implementation timeline for an AI solution depends on the
              complexity of the project and the specific needs of your business.
              A simple AI tool might take a few weeks to implement, while more
              complex, custom solutions may take several months. Our team works
              closely with clients to define clear milestones and timelines,
              ensuring the project stays on track and aligns with your business
              objectives.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              Will AI solutions require ongoing maintenance?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Yes, AI models require periodic maintenance and updates to ensure
              they continue to perform optimally. At Veritech, we provide
              ongoing support and maintenance services to ensure your AI
              solutions evolve with your business needs. We also offer training
              and monitoring services to ensure the AI models adapt to changing
              data and business conditions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              What is the cost of implementing an AI solution?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              The cost of implementing an AI solution varies depending on
              factors such as the complexity of the project, the scope of work,
              and the resources required. Veritech offers flexible pricing
              models, including project-based pricing, subscription plans, and
              ongoing support options. We work with you to determine the most
              cost-effective solution that delivers the best value for your
              business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              How does Veritech ensure data security in AI solutions?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Data security is a top priority at Veritech. We adhere to the
              highest standards of security and compliance, implementing robust
              encryption, secure data storage, and strict access controls to
              protect your sensitive data. We also ensure that our AI solutions
              follow relevant regulations and industry best practices to
              safeguard against potential risks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-bold">
              Can Veritech integrate AI into my existing systems?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base lg:text-lg">
              Yes, Veritech specializes in integrating AI into your existing
              infrastructure and systems. Our team ensures that the AI solutions
              work seamlessly with your current technologies, whether it's CRM
              systems, ERP software, or custom-built applications. We work
              closely with your IT team to ensure smooth integration and
              minimize disruption to your business operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="white h-[80vh] w-screen flex items-center justify-center">
        <div className="h-1/2 w-screen flex flex-col items-center justify-center">
          <div className="flex flex-col align-center justify-center">
            <p className="text-xl max-w-6xl text-zinc-700 w-full md:text-4xl lg:text-5xl inter-var text-center font-julius font-medium">
              Revolutionize Customer Experience with Smart Solutions
            </p>
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="flex flex-col items-end justify-center px-7 py-3 rounded-full mt-8 border border-secondary cursor-pointer transition-all hover:border-accent2 hover:text-accent2 hover:scale-105 duration-50"
          >
            <p className="font-julius text-sm md:text-3xl">Contact Us</p>
          </div>
        </div>
      </div>

      {/* <Background/> */}
      <ContactUsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer setShowModal={setShowModal} />
    </div>
  );
}

export default Home;
