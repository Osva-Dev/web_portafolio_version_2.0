import { useState } from "react";
import "./App.css";

import miImagen from "./assets/images/osvaldo_ochoa.jpg";
import majinVegeta from "./assets/images/majin_vegeta.jpg";

import react from "./assets/icons/react.svg";
import angular from "./assets/icons/angular.png";
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.svg";
import js from "./assets/icons/js.svg";
import tailwind from "./assets/icons/tailwind.png";
import figma from "./assets/icons/figma.svg";
import nodeJs from "./assets/icons/nodejs.svg";
import express from "./assets/icons/express.png";
import go from "./assets/icons/go.png";
import mongodb from "./assets/icons/mongodb.png";
import mysql from "./assets/icons/mysql.png";

import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";
import cv from "./assets/icons/cv.png";

function App() {
  return (
    <>
      <section className="h-[700px] w-[1000px] grid grid-cols-5 grid-rows-12 gap-3 p-4">
        <div className="bg-yellow-300 col-start-1 col-span-4 row-start-1 row-span-5 rounded-lg shadow-xl flex flex-col justify-center p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            PORTFOLIO · 2026
          </p>
          <h1 className="text-4xl font-semibold text-black mt-2">
            OSVALDO OCHOA
          </h1>
          <h2 className="text-6xl font-bold text-black">WEB DEVELOPER JR</h2>
          <p className="text-1xl text-gray-600">
            Enfocado en la creación de soluciones digitales modernas,
            funcionales y centradas en el usuario. Cuento con una sólida base
            técnica en React y principios de UX/UI, lo que me permite diseñar y
            desarrollar interfaces que combinan rendimiento, experiencia de
            usuario y diseño visual de alta calidad.
          </p>
        </div>

        <div className="bg-yellow-300 col-start-5 col-span-1 row-start-1 row-span-2 rounded-lg shadow-xl h-full flex flex-col p-3">
          <p className="text-xs font-medium text-gray-700 self-start uppercase tracking-wider">
            Made In
          </p>
          <div className="flex-1 flex items-end justify-start">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              México
            </h2>
          </div>
        </div>

        <div className="bg-gray-900 col-start-5 col-span-1 row-start-3 row-span-2 rounded-lg shadow-xl h-full flex flex-col p-3">
          <p className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider">
            Experience
          </p>
          <div className="flex-1 flex items-end justify-start">
            <h2 className="text-2xl md:text-3xl font-black text-yellow-500">
              +3 Years
            </h2>
          </div>
        </div>

        <div className="col-start-5 col-span-1 row-start-5 row-span-8 rounded-lg shadow-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={miImagen}
            alt="Osvaldo"
          />
        </div>

        <div className="bg-gray-900 col-start-4 row-span-3 shadow-xl h-full flex flex-col p-3">
          <p className="text-xs font-medium text-gray-400 self-start uppercase tracking-wider">
            Follow Me
          </p>
          <div className="flex-1 flex flex-col items-start justify-end gap-2">
            <img
              src={majinVegeta}
              alt="Avatar"
              className="h-16 w-16 rounded-full object-cover border-2 border-gray-600"
            />
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white col-start-1 col-span-2 row-start-6 row-span-4 rounded-lg shadow-xl p-4 flex flex-col">
          <h2 className=" text-lg font-bold uppercase tracking-wider mb-3 ml-6">
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
          <h2 className=" text-lg font-bold uppercase tracking-wider mb-3 ml-6">
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

        <div className="bg-blue-900 col-start-1 col-span-2 row-start-10 row-span-3 rounded-lg shadow-xl" />

        <a
          href="/cv-osvaldo-ochoa.pdf"
          download
          className="bg-yellow-300 col-start-3 row-start-10 row-span-3 rounded-lg shadow-xl  flex flex-col p-3 "
        >
          <p className="text-xs font-medium text-gray-700 self-start uppercase tracking-wider">
            My CV
          </p>
          <div className="flex-1 flex items-end justify-start">
            <img
              src={cv}
              alt="Descargar CV"
              className="h-12 w-12 object-contain"
            />
          </div>
        </a>
      </section>
    </>
  );
}

export default App;
