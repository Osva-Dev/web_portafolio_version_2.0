function HeroBlock({
  bgColor,
  textColor,
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  className,
  children,
}) {
  return (
    <div
      className={`
        ${bgColor} 
        ${textColor} 
        col-start-${colStart} 
        col-span-${colSpan} 
        row-start-${rowStart} 
        row-span-${rowSpan} rounded-lg shadow-xl 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default HeroBlock;
