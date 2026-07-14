import HeroMain from "./HeroMain";
import HeroData from "./HeroData";
import HeroTechnologies from "./HeroTechnologies";
import HeroPhoto from "./HeroPhoto";
import HeroProcessesAndMethodologies from "./HeroProcessesAndMethodologies";
import HeroContact from "./HeroContact";

function Hero() {
  return (
    <div className="h-[850px] w-[1250px] grid grid-cols-10 grid-rows-6 gap-4 mt-15 px-4">
      <HeroMain />
      <HeroData />
      <HeroTechnologies />
      <HeroPhoto />
      <HeroProcessesAndMethodologies />
      <HeroContact />
    </div>
  );
}

export default Hero;
