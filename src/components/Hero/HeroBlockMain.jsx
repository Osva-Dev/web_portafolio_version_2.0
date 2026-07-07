import HeroBlock from "./HeroBlock";

function HeroBlockMain() {
  return (
    <HeroBlock
      bgColor="bg-yellow-300"
      textColor="text-gray-900"
      colStart={1}
      colSpan={4}
      rowStart={1}
      rowSpan={5}
      className="flex flex-col justify-center p-6"
    >
      <p className="text-xs uppercase tracking-widest text-gray-500">
        PORTFOLIO · 2026
      </p>
      <h1 className="text-4xl font-semibold text-black mt-2">OSVALDO OCHOA</h1>
      <h2 className="text-6xl font-bold text-black">WEB DEVELOPER JR</h2>
      <p className="text-lg text-gray-900 mt-3">
        Enfocado en la creación de soluciones digitales modernas, funcionales,
        esteticas y centradas en el usuario. Cuento con una sólida base técnica
        en React y principios de UX/UI, lo que me permite diseñar y desarrollar
        interfaces que combinan rendimiento, experiencia de usuario y diseño
        visual de alta calidad.
      </p>
    </HeroBlock>
  );
}

export default HeroBlockMain;
