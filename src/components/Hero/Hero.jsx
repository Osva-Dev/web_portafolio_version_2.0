import react from "../../assets/icons/react.svg";
import angular from "../../assets/icons/angular.png";
import js from "../../assets/icons/js.svg";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.svg";
import tailwind from "../../assets/icons/tailwind.png";
import figma from "../../assets/icons/figma.svg"; // Corregido (antes apuntaba a tailwind)

import nodeJs from "../../assets/icons/nodejs.svg";
import express from "../../assets/icons/express.png";
import go from "../../assets/icons/go.png";
import mongodb from "../../assets/icons/mongodb.png";
import mysql from "../../assets/icons/mysql.png";

import cv from "../../assets/icons/cv.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

import myImage from "../../assets/images/osvaldo_ochoa.jpg";

function Hero() {
  return (
    <div className="h-[800px] w-[1250px] grid grid-cols-10 grid-rows-6 gap-4 mt-15 px-4">
      {/* Bloque principal (amarillo) */}
      <div className="flex flex-col justify-center row-span-3 col-span-8 bg-yellow-400 p-6 rounded-xl shadow-lg ">
        <p className="text-xs uppercase tracking-widest text-gray-600">
          PORTFOLIO · 2026
        </p>
        <h1 className="text-4xl font-semibold text-black mt-2">
          OSVALDO OCHOA
        </h1>
        <h2 className="text-6xl font-bold text-black leading-tight">
          WEB DEVELOPER JR
        </h2>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          Enfocado en la creación de soluciones digitales modernas, funcionales,
          estéticas y centradas en el usuario. Cuento con una sólida base
          técnica en React y principios de UX/UI, lo que me permite diseñar y
          desarrollar interfaces que combinan rendimiento, experiencia de
          usuario y diseño visual de alta calidad.
        </p>
      </div>

      {/* Bloque Status */}
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-1 ">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Status
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-xl md:text-2xl font-black tracking-tight">
            Available to Work
          </h3>
        </div>
      </div>

      {/* Bloque Experience */}
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-2">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Experience
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            +3 Years
          </h3>
        </div>
      </div>

      {/* Bloque Made In */}
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-3">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Made In
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            México
          </h3>
        </div>
      </div>

      {/* Frontend */}
      <div className="bg-gray-900 text-white col-start-1 col-span-4 row-start-4 row-span-2 rounded-xl shadow-lg p-5 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider mb-4">
          Frontend & Diseño
        </h2>
        <div className="grid grid-cols-4 gap-3 flex-1 items-center">
          {[react, angular, js, html, css, tailwind, figma].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-auto h-10" src={icon} alt="tech" />
              <p className="text-xs mt-1">
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

      {/* Backend */}
      <div className="bg-gray-900 text-white col-start-5 col-span-4 row-start-4 row-span-2 rounded-xl shadow-lg p-5 flex flex-col">
        <h2 className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider mb-4">
          Backend y Base de Datos
        </h2>
        <div className="grid grid-cols-4 gap-3 flex-1 items-center">
          {[nodeJs, express, go, mongodb, mysql].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-auto h-10" src={icon} alt="tech" />
              <p className="text-xs mt-1">
                {["Node JS", "Express JS", "Go", "MongoDB", "MySQL"][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Me */}
      <div className="bg-gray-800 text-white col-start-7 col-span-2 row-start-6 row-span-1 rounded-xl shadow-lg p-4 flex flex-col">
        <p className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider">
          Contact Me
        </p>
        <div className="flex-1 flex flex-col items-start justify-center gap-2">
          <p className="text-sm text-gray-300">osvadev30@gmail.com</p>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={cv} alt="CV" className="h-10 w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="h-10 w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Imagen de perfil */}
      <div className="col-start-9 col-span-2 row-start-4 row-span-3 rounded-xl shadow-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={myImage}
          alt="Osvaldo"
        />
      </div>

      {/* Procesos y metodologías */}
      <div className="bg-white col-start-1 col-span-6 row-start-6 row-span-1 rounded-xl shadow-lg p-5 flex flex-col">
        <h2 className="text-xs font-medium text-gray-600 self-start uppercase tracking-wider mb-3">
          Procesos y metodologías
        </h2>
        <div className="flex flex-wrap gap-2 flex-1 content-start">
          {[
            "Git",
            "GitHub",
            "Agile",
            "SCRUM",
            "User Experience",
            "User Interface",
            "Interface Design",
            "Documentation",
            "User Stories",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-gray-800 text-white text-m font-medium px-5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
