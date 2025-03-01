import caseStudy from "../../assets/images/caseStudy.png"

export default function CaseStudyCard({text = "Financial services", subText = "Boost Customer Confidence with Intelligent Interactions"}) {
  return (
    <div className="w-full">
        <img className="object-fill rounded-3xl" src={caseStudy} alt="" />
        <p className="font-julius text-xl md:text-2xl text-white font-semibold mt-4">{text}</p>
        <p className="font-julius text-sm md:text-base text-gray-400 font-semibold">{subText}</p>
    </div>
  )
}
