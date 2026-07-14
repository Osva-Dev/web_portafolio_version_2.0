import react from "../../assets/icons/react.svg";
import angular from "../../assets/icons/angular.png";
import js from "../../assets/icons/js.svg";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.svg";
import tailwind from "../../assets/icons/tailwind.png";
import figma from "../../assets/icons/figma.svg";

import nodeJs from "../../assets/icons/nodejs.svg";
import express from "../../assets/icons/express.png";
import go from "../../assets/icons/go.png";
import mongodb from "../../assets/icons/mongodb.png";
import mysql from "../../assets/icons/mysql.png";

function HeroTechnologies() {
  return (
    <>
      <div className="bg-gray-900 text-white col-start-1 col-span-4 row-start-4 row-span-2 rounded-xl shadow-lg p-5 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider mb-4 ml-6">
          Frontend & Diseño
        </h2>
        <div className="grid grid-cols-4 gap-3 flex-1 items-center">
          {[react, angular, js, html, css, tailwind, figma].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-auto h-12" src={icon} alt="tech" />
              <p className="text-m mt-1">
                {
                  [
                    "React",
                    "Angular",
                    "JavaScript",
                    "HTML",
                    "CSS3",
                    "Tailwind",
                    "Figma",
                  ][idx]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white col-start-5 col-span-4 row-start-4 row-span-2 rounded-xl shadow-lg p-5 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider mb-4 ml-6">
          Backend y Base de Datos
        </h2>
        <div className="grid grid-cols-4 gap-3 flex-1 items-center">
          {[nodeJs, express, go, mongodb, mysql].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-auto h-12" src={icon} alt="tech" />
              <p className="text-m mt-1">
                {["Node JS", "Express JS", "Go", "MongoDB", "MySQL"][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroTechnologies;
