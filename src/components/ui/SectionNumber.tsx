interface SectionNumberProps {
  number: string;
  text: string;
  type: "dark" | "light";
  cta?: boolean | string;
  ctaAction?: () => void;
}
const SectionNumber: React.FC<SectionNumberProps> = ({
  number,
  text,
  type,
  cta = false,
  ctaAction,
}) => {
  const DarkSection = () => (
    <div className="w-full max-w-5xl px-5">
      <div className="flex flex-row justify-between items-center gap-3 pb-2 border-b-4 border-gray-200 w-full">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col items-center justify-center aspect-square p-3 rounded-full h-8 md:h-[40px] border border-primary">
            {number}
          </div>
          <p className="font-julius text-2xl">{text}</p>
        </div>
        {cta && (
          <button
            onClick={ctaAction}
            className="bg-primary text-secondary px-6 py-2 rounded-lg shadow-md w-fit text-xl font-semibold"
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
  const LightSection = () => (
    <div className="w-full max-w-5xl px-5">
      <div className="flex flex-row items-center justify-between gap-3 pb-2 border-b-4 border-gray-200 w-full">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col items-center justify-center aspect-square p-3 rounded-full h-8 md:h-[40px] border border-secondary">
            {number}
          </div>
          <h3 className="font-julius text-2xl md:text-3xl">{text}</h3>
        </div>
        {cta && (
          <button
            onClick={ctaAction}
            className="bg-primary text-secondary px-6 py-2 rounded-lg shadow-md w-fit text-xl font-semibold"
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
  return <>{type === "dark" ? <DarkSection /> : <LightSection />}</>;
};
export default SectionNumber;
