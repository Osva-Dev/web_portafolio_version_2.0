// src/components/Hero/HeroBlockInfo.jsx
import HeroBlock from "./HeroBlock";

function HeroBlockInfo({
  title,
  info,
  bgColor = "bg-gray-900",
  labelColor = "text-gray-400",
  infoColor = "text-yellow-600",
  colStart = 5,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 2,
  className = "",
}) {
  return (
    <HeroBlock
      bgColor={bgColor}
      textColor={labelColor}
      colStart={colStart}
      colSpan={colSpan}
      rowStart={rowStart}
      rowSpan={rowSpan}
      className={`h-full flex flex-col p-3 ${className}`}
    >
      <p className={`text-xs uppercase tracking-widest  ${labelColor}`}>
        {title}
      </p>

      <div className="flex-1 flex items-end justify-start">
        <h2
          className={`text-2xl md:text-3xl font-black tracking-tight ${infoColor}`}
        >
          {info}
        </h2>
      </div>
    </HeroBlock>
  );
}

export default HeroBlockInfo;
