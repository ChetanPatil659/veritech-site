import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUsModal from "./components/ui/ContactPopup";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Solutions() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" h-screen">
      <Navbar bgColor="#fff" />
      <div className="max-w-[1200px] mx-auto h-fit py-40 px-5 overflow-y-hidden">
        <p className="lg:text-5xl text-xl font-semibold mb-6 text-gray-400">
          {"Case Studies"}
        </p>
        <BentoGrid className="max-w-[1440px] mx-auto">
          {solutions.map((item, i) => (
            <Link to={`/solutions/${item.title}`}>
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.overview}
                header={<Skeleton />}
                // icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
      <ContactUsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer setShowModal={setShowModal} />
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const solutions = [
  {
    title: `Transforming Telecom Customer Support with Veritech.ai`,
    solutions: [
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
    ],
    overview: `The telecom industry is characterized by high volumes of customer
            interactions, operational complexities, and a need for exceptional
            service delivery. Veritech.ai’s AI-Powered Unified Customer
            Interaction Platform addresses these challenges by enhancing customer
            experience, streamlining workflows, and empowering agents with
            advanced tools.`,
    client_challenges: `A leading telecom provider faced challenges in managing increasing call volumes, inconsistent service quality, and operational inefficiencies. The existing system lacked the capabilities to provide real-time insights, tailored agent support, and comprehensive analytics, which resulted in lower customer satisfaction scores and higher operational costs.`,
    conclusion: `With Veritech.ai’s AI-powered solutions, the telecom company transformed its customer support operations, achieving superior service quality, operational efficiency, and heightened customer satisfaction.`,
    results: [
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
        description: `Enhanced ability to predict and address customer needs proactively.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title: `Transforming Ecommerce Customer Engagement with Veritech.ai`,
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: `Veritech.ai’s platform analyzed customer interactions to identify preferences and provide personalized product recommendations. This enhanced the shopping experience, increased satisfaction, and boosted conversion rates.`,
      },
      {
        title: "Agent Empowerment Suite ",
        description: `The platform equipped agents with continuous learning tools and personalized training, enabling them to address queries effectively, from product details to order tracking.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Advanced dashboards provided key metrics like average handling time and conversion rates. These insights helped the company refine its customer service strategies and optimize operations.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: `The platform integrated smoothly with the client’s ecommerce systems, ensuring minimal disruption. Strong data privacy measures protected sensitive customer information, ensuring compliance with industry standards.`,
      },
    ],
    overview: `The ecommerce industry thrives on delivering personalized customer experiences and efficient service. Veritech.ai’s AI-Powered Unified Customer Interaction Platform addresses key challenges in ecommerce by enhancing customer engagement, empowering support teams, and delivering actionable insights to improve operational efficiency.`,
    client_challenges: `A leading ecommerce company struggled with managing high volumes of customer queries, personalizing the shopping experience, and optimizing service efficiency. They needed a solution to provide real-time insights, improve agent training, and ensure seamless integration with their existing systems.`,
    conclusion: `With Veritech.ai’s AI-driven solutions, the ecommerce company transformed its customer service, achieving enhanced customer engagement, higher sales, and streamlined operations.`,
    results: [
      {
        title: "40%",
        description: "Increase in customer satisfaction scores.",
        icon: <IconTerminal2 />,
      },
      {
        title: "30%",
        description: "Improvement in query resolution efficiency.",
        icon: <IconEaseInOut />,
      },
      {
        title: "20%",
        description:
          "Enhanced personalization led to a 20% Boost in conversion rates.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Streamlined operations`,
        description: `Streamlined operations reduced agent workload and improved response times.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title: "Enhancing Financial Services with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: `Veritech.ai’s platform analyzed customer interactions in real time, detecting potential fraudulent activities and providing alerts to agents. This proactive approach strengthened fraud prevention efforts.`,
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Continuous training and upskilling tools enabled agents to address complex customer concerns confidently, including security issues and financial product inquiries.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Advanced analytics helped the company identify patterns in customer behavior and potential fraud, providing actionable insights for decision-making and customer engagement strategies.`,
      },
      {
        title: "Easy Integration and Data Privacy",
        description: `The platform integrated seamlessly with the company’s existing systems, ensuring minimal disruption. Robust data privacy measures ensured compliance with industry regulations and built customer trust.`,
      },
    ],
    overview: `The financial services industry prioritizes trust, security, and efficiency in customer interactions. Veritech.ai’s AI-powered solutions empower financial institutions to deliver exceptional customer experiences while maintaining stringent security standards.`,
    client_challenges: `A leading financial services company faced challenges in detecting fraudulent activities, providing personalized customer support, and managing data securely. They sought a solution to enhance trust, streamline customer interactions, and improve operational efficiency.`,
    conclusion: `With Veritech.ai’s AI-powered solutions, the telecom company transformed its customer support operations, achieving superior service quality, operational efficiency, and heightened customer satisfaction.`,
    results: [
      {
        title: "25%",
        description: "Reduction in fraud detection response time.",
        icon: <IconTerminal2 />,
      },
      {
        title: "30%",
        description: "Improvement in agent productivity and accuracy.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Enhanced customer satisfaction and trust",
        description:
          "Enhanced customer satisfaction and trust, with a noticeable increase in retention rates.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Streamlined compliance`,
        description: `Streamlined compliance processes through data-driven insights.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title: "Revolutionizing Insurance Operations with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: `The platform analyzed customer calls and chats, providing agents with real-time insights to expedite claim submissions and resolve inquiries efficiently.`,
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Continuous training modules equipped agents with specialized skills to address complex insurance queries and claims effectively, transforming them into super agents.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Advanced analytics enabled the company to monitor claim processing times, customer satisfaction scores, and identify bottlenecks, driving operational improvements.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: `The solution integrated seamlessly with the company’s existing claim management systems while ensuring strict adherence to data privacy and security standards.`,
      },
    ],
    overview: `The insurance sector demands efficiency and accuracy, especially in claim processing and customer interactions. Veritech.ai’s AI-powered solutions empower insurance companies to enhance customer service, streamline operations, and maintain high standards of data security.`,
    client_challenges: `A leading insurance company struggled with lengthy claim processing times, inconsistent customer support, and the need for robust data security measures. They aimed to improve customer satisfaction and operational efficiency while reducing processing delays.`,
    conclusion: `With Veritech.ai’s AI-powered solutions, the telecom company transformed its customer support operations, achieving superior service quality, operational efficiency, and heightened customer satisfaction.`,
    results: [
      {
        title: "40%",
        description: "Reduction in average claim processing time.",
        icon: <IconTerminal2 />,
      },
      {
        title: "25%",
        description: "Increase in first-call resolution rates.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Enhanced agent efficiency",
        description:
          "Enhanced agent efficiency and customer satisfaction scores.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Streamlined operations`,
        description: `Streamlined operations with actionable insights from detailed analytics.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title: "Transforming Patient Engagement for Healthtech with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: `The platform analyzed patient interactions in real time, enabling healthcare providers to offer accurate and empathetic responses during consultations.`,
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Continuous training modules kept healthcare agents updated with the latest medical practices, ensuring precision in addressing patient concerns and improving the quality of care.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Detailed analytics provided insights into patient satisfaction, consultation effectiveness, and operational efficiency, guiding improvements in service delivery.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: `The platform integrated seamlessly with the company’s EHR systems, adhering to stringent healthcare data privacy regulations such as HIPAA, ensuring secure handling of sensitive patient information.`,
      },
    ],
    overview: `In the healthtech sector, effective communication and secure patient interaction are critical. Veritech.ai’s advanced AI platform enables healthtech companies to enhance patient engagement, streamline workflows, and maintain data privacy compliance, ultimately improving healthcare outcomes.`,
    client_challenges: `A leading healthtech provider faced challenges in managing patient queries efficiently, maintaining secure data integration with EHR systems, and ensuring high patient satisfaction. They sought an intelligent solution to improve their virtual health consultations and optimize operational performance.`,
    conclusion: `Veritech.ai revolutionized patient engagement and operational efficiency for the healthtech provider, fostering trust and improving healthcare outcomes.`,
    results: [
      {
        title: "30%",
        description: "Reduction in response times for patient queries.",
        icon: <IconTerminal2 />,
      },
      {
        title: "Improved Patient Satisfaction",
        description:
          "Improved Patient Satisfaction scores, with personalized and accurate consultations",
        icon: <IconEaseInOut />,
      },
      {
        title: "Enhanced Compliance",
        description:
          "Enhanced Compliance with healthcare data privacy regulations.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Streamlined workflows`,
        description: `Streamlined workflows, allowing healthcare providers to focus more on patient care.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title:
      "Enhancing Educational Support for Edtech Companies with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: `The platform analyzed student and parent inquiries in real time, enabling agents to provide personalized academic assistance and address concerns effectively.`,
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Tailored training programs ensured agents could handle diverse queries, from technical issues with the learning platform to academic advising.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Detailed metrics provided insights into student satisfaction, engagement levels, and resolution times, enabling the company to refine its support strategies continuously.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: `Veritech.ai’s seamless integration with the company’s learning management system (LMS) ensured smooth deployment, while robust data privacy measures maintained compliance with global educational data regulations.`,
      },
    ],
    overview: `In the competitive edtech landscape, providing exceptional support to students and parents is crucial for ensuring learning success and satisfaction. Veritech.ai’s AI-Powered Unified Customer Interaction Platform empowers edtech companies to optimize their support services, enhance student engagement, and uphold data privacy standards.`,
    client_challenges: `An edtech company faced challenges in managing a growing volume of student and parent inquiries while ensuring personalized support and maintaining data security. They needed a scalable AI-driven solution to improve student satisfaction and streamline operational efficiency.`,
    conclusion: `Veritech.ai transformed the company’s student support services, enabling them to deliver a superior educational experience while maintaining operational excellence.`,
    results: [
      {
        title: "40%",
        description:
          " Improvement in query resolution times, enhancing student satisfaction. ",
        icon: <IconTerminal2 />,
      },
      {
        title: "Increased Engagement",
        description:
          "Increased Engagement through personalized support tailored to individual student needs.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Streamlined Operations",
        description:
          "Streamlined Operations with actionable analytics, freeing resources for educational innovation.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Enhanced Data Security`,
        description: `Enhanced Data Security with compliance to industry-leading privacy standards.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title: "Streamlining Recruitment for Staffing Companies with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: [
          `Analyzed candidate resumes and interactions to identify the best matches for job openings.`,
          `Provided real-time insights to recruiters, streamlining the hiring process and improving candidate engagement.`,
        ],
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Equipped recruiters with tools and continuous training to enhance interview techniques and build stronger candidate relationships.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Tracked metrics like time-to-hire, candidate satisfaction, and job matching efficiency, enabling data-driven recruitment strategies.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: [
          `Integrated seamlessly with the company’s applicant tracking system (ATS).`,
          `Ensured compliance with global data privacy regulations to protect sensitive candidate and client information.`,
        ],
      },
    ],
    overview: `In the fast-paced recruiting and staffing industry, efficiency and precision in matching candidates to job roles are critical. Veritech.ai’s AI-Powered Unified Customer Interaction Platform helps staffing firms optimize recruitment processes, enhance candidate engagement, and improve operational outcomes.`,
    client_challenges: `A staffing company faced challenges in screening a large volume of candidates, matching them to the right job roles, and maintaining seamless communication with clients while adhering to stringent data privacy requirements. They needed a scalable AI solution to boost efficiency and enhance candidate and client satisfaction.`,
    conclusion: `Veritech.ai enabled the staffing company to transform its recruitment operations, resulting in higher candidate satisfaction, better job matches, and improved business outcomes.`,
    results: [
      {
        title: "30%",
        description:
          " Reduction in time-to-hire, accelerating recruitment cycles.",
        icon: <IconTerminal2 />,
      },
      {
        title: "Enhanced Candidate Experience",
        description:
          "Enhanced Candidate Experience through personalized communication and improved engagement.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Optimized Recruitment Strategies",
        description:
          "Optimized Recruitment Strategies using actionable analytics to refine screening and hiring processes.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Increased Operational Efficiency`,
        description: `Increased Operational Efficiency with automation and intelligent insights.`,
        icon: <IconCloud />,
      },
    ],
  },

  {
    title:
      "Enhancing Guest Experience in Travel & Hospitality with Veritech.ai",
    solutions: [
      {
        title: "Semantic Intelligence on Interactions ",
        description: [
          `Analyzed guest conversations to understand their preferences, enabling agents to offer personalized travel recommendations and assistance.`,
          `Provided real-time insights to agents, enhancing their ability to address guest inquiries with accuracy and empathy.`,
        ],
      },
      {
        title: "Agent Empowerment Suite ",
        description: `Equipped agents with continuous training and upskilling, ensuring they could efficiently handle a wide range of guest queries, from booking modifications to local recommendations.`,
      },
      {
        title: `Comprehensive Reporting and Analytics`,
        description: `Tracked guest satisfaction metrics and service efficiency, providing actionable insights to optimize customer service operations and enhance guest experiences.`,
      },
      {
        title: "Seamless Integration and Robust Data Privacy ",
        description: [
          `Integrated seamlessly with the company’s booking and customer management systems, ensuring a smooth transition without disrupting operations.`,
          `Ensured compliance with data privacy regulations, safeguarding sensitive guest information.`,
        ],
      },
    ],
    overview: `In the competitive travel and hospitality industry, providing exceptional and personalized customer service is crucial. Veritech.ai’s AI-powered platform offers travel and hospitality companies the tools to improve guest interactions, streamline operations, and enhance overall guest satisfaction.`,
    client_challenges: `A leading travel and hospitality company was struggling to offer personalized guest services at scale. With increasing volumes of guest inquiries, they needed a solution that would help agents provide timely, personalized, and efficient support, while also ensuring smooth integration with their existing systems and upholding data privacy standards.`,
    conclusion: `With Veritech.ai’s AI-powered solutions, the telecom company transformed its customer support operations, achieving superior service quality, operational efficiency, and heightened customer satisfaction.`,
    results: [
      {
        title: "Improved Guest Satisfaction",
        description:
          "Improved Guest Satisfaction with personalized assistance and timely responses.",
        icon: <IconTerminal2 />,
      },
      {
        title: "Enhanced Operational Efficiency",
        description:
          "Enhanced Operational Efficiency by automating routine guest interactions, freeing agents to focus on more complex queries.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Optimized Travel Recommendations",
        description:
          "Optimized Travel Recommendations through data-driven insights, improving the quality of personalized services.",
        icon: <IconCurrencyDollar />,
      },
      {
        title: `Increased Loyalty`,
        description: `Increased Loyalty through superior customer service and tailored travel experiences.`,
        icon: <IconCloud />,
      },
    ],
  },
];
