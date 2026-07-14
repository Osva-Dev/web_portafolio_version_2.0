import cv from "../../assets/icons/cv.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

function HeroContact() {
  return (
    <div className="bg-gray-800 text-white col-start-7 col-span-2 row-start-6 row-span-2 rounded-xl shadow-lg p-4 flex flex-col">
      <p className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider">
        Contact Me
      </p>
      <div className="flex-1 flex  items-end justify-left gap-2">
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1kBBdWtXFTy0-OenDwe2Y5l9cHT39rHA5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cv} alt="CV" className="h-12 w-12" />
          </a>
          <a
            href="https://github.com/Osva-Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="h-11 w-11" />
          </a>
          <a
            href="https://www.linkedin.com/in/osvaldo-ochoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="h-11 w-11" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroContact;
