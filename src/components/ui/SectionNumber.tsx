// export default function SectionNumber({
//   number,
//   text,
//   type,
// }: {
//   number: string;
//   text: string;
//   type: string;
// }) {
//   return (
//     <>
//       {type === "dark" ? 
//       <div className="flex flex-row items-center gap-3 pb-2 border-b-4 border-[#FFFFFF] border-opacity-45 md:w-2/3 w-4/5">
//         <div className="flex flex-col items-center justify-center border-[1px] border-[#FFFFFF] border-opacity-45 bg-[#292A9E] aspect-square p-3 text-white rounded-full h-[50px]">
//           {number}
//         </div>
//         <p className="font-julius text-2xl text-white ">{text}</p>
//       </div>
//         :
//       <div className="flex flex-row items-center gap-3 pb-2 border-b-4 border-[#ADA7C9] md:w-2/3 w-4/5">
//         <div className="flex flex-col items-center justify-center bg-[#ADA7C9] aspect-square p-3 text-white rounded-full h-8 md:h-[40px]">
//         {number}
//         </div>
//         <p className="font-julius text-2xl md:text-3xl text-[#ADA7C9]">{text}</p>
//       </div>}
//     </>
//   );
// }

interface SectionNumberProps {
  number: string;
  text: string;
  type: "dark" | "light";
}

const SectionNumber: React.FC<SectionNumberProps> = ({ number, text, type }) => {
  const DarkSection = () => (
    <div className="flex flex-row items-center gap-3 pb-2 border-b-4 border-[#FFFFFF] border-opacity-45 md:w-2/3 w-4/5">
      <div className="flex flex-col items-center justify-center border-[1px] border-[#FFFFFF] border-opacity-45 bg-[#292A9E] aspect-square p-3 text-white rounded-full h-[50px]">
        {number}
      </div>
      <p className="font-julius text-2xl text-white">{text}</p>
    </div>
  );

  const LightSection = () => (
    <div className="flex flex-row items-center gap-3 pb-2 border-b-4 border-[#ADA7C9] md:w-2/3 w-4/5">
      <div className="flex flex-col items-center justify-center bg-[#ADA7C9] aspect-square p-3 text-white rounded-full h-8 md:h-[40px]">
        {number}
      </div>
      <p className="font-julius text-2xl md:text-3xl text-[#ADA7C9]">{text}</p>
    </div>
  );

  return (
    <>
      {type === "dark" ? <DarkSection /> : <LightSection />}
    </>
  );
};

export default SectionNumber;

