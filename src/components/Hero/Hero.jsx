import "../../App.css";

import HeroBlockMain from "./HeroBlockMain.jsx";
import HeroBlockInfo from "./HeroBlockInfo.jsx";

import miImagen from "../../assets/images/osvaldo_ochoa.jpg";

import react from "../../assets/icons/react.svg";
import angular from "../../assets/icons/angular.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import tailwind from "../../assets/icons/tailwind.png";
import figma from "../../assets/icons/figma.svg";
import nodeJs from "../../assets/icons/nodejs.svg";
import express from "../../assets/icons/express.png";
import go from "../../assets/icons/go.png";
import mongodb from "../../assets/icons/mongodb.png";
import mysql from "../../assets/icons/mysql.png";

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import cv from "../../assets/icons/cv.png";

function Hero() {
  return (
    <section className="grid grid-cols-5 grid-rows-12 gap-3 p4 mt-16">
      <HeroBlockMain />

      <HeroBlockInfo
        title="STATUS"
        info="Open To Work"
        bgColor="bg-gray-900"
        infoColor="text-yellow-300"
        rowStart={1}
        rowSpan={2}
      />

      <HeroBlockInfo
        title="Experience"
        info="+3 Years"
        bgColor="bg-yellow-300"
        infoColor="text-gray-900"
        labelColor="text-black"
        rowStart={3}
        rowSpan={2}
      />

      <HeroBlockInfo
        title="Made In"
        info="México"
        bgColor="bg-gray-900"
        infoColor="text-yellow-300"
        rowStart={5}
        rowSpan={2}
      />

      <div className="col-start-5 col-span-1 row-start-7 row-span-6 rounded-lg shadow-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={miImagen}
          alt="Osvaldo"
        />
      </div>

      <div className="bg-gray-900 col-start-4 row-span-3 shadow-xl h-full flex flex-col p-3">
        <p className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider">
          Contact Me
        </p>
        <div className="flex-1 flex flex-col items-start justify-end gap-2">
          <div>
            <p className="text-white mb-3">osvadev30@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1kBBdWtXFTy0-OenDwe2Y5l9cHT39rHA5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cv} alt="CV" className="h-11 w-11" />
            </a>
            <a
              href="https://github.com/Osva-Dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="h-10 w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/osvaldo-ochoa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white col-start-1 col-span-2 row-start-6 row-span-4 rounded-lg shadow-xl p-4 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider ml-10 mb-4">
          Frontend & Diseño
        </h2>
        <div className="grid grid-cols-4 gap-2 flex-1 items-center ">
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={react} alt="React Icon" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={angular} alt="" />
            <p>Angular</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={css} alt="" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={tailwind} alt="" />
            <p>Tailwind </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={figma} alt="" />
            <p>Figma</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white col-start-3 col-span-2 row-start-6 row-span-4 rounded-lg shadow-xl p-4 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider ml-10 mb-4">
          Backend y Base de Datos
        </h2>
        <div className="grid grid-cols-4 gap-2 flex-1 items-center ">
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={nodeJs} alt="NodeJS Icon" />
            <p>Node JS</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={express} alt="ExpressJS Icon" />
            <p>Express JS</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={go} alt="Go Icon" />
            <p>Go</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={mongodb} alt="MongoDB Icon" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-auto h-10" src={mysql} alt="MySQL Icon" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <div className="bg-white col-start-1 col-span-3 row-start-10 row-span-3 rounded-lg shadow-xl  flex flex-col p-4">
        <h2 className="text-xs font-medium text-black self-start uppercase tracking-wider ml-2 mb-4">
          Procesos y metodologías
        </h2>
        <div className="flex flex-wrap gap-2 flex-1 content-start ">
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            Git
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            GitHub
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            Agile{" "}
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            SCRUM
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            User Experience
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            User Interface
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            Interface Design
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            Documentation
          </p>
          <p className="bg-gray-800 text-white text-large font-medium px-3 p-2  content-center rounded-full text-center truncate">
            User Stories
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
