import { useState } from "react";
import "./App.css";

import miImagen from "./assets/images/osvaldo_ochoa.jpg";
import majinVegeta from "./assets/images/majin_vegeta.jpg";
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
          <p className="text-2xl text-gray-600 uppercase">
            El inicio de una etapa enfocada en demostrar
            <br />
            compromiso, responsabilidad y profesionalismo.
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

        <div className="bg-gray-900 col-start-3 col-span-2 row-start-6 row-span-4 rounded-lg shadow-xl" />

        <div className="bg-red-900 col-start-1 col-span-2 row-start-6 row-span-4 " />

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
