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
{/_ ====== PRINCIPAL (col 1-4, filas 1-5) ====== _/}
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

        {/* ====== MÉXICO (col 5, filas 1-2) ====== */}
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

        {/* ====== EXPERIENCIA (col 5, filas 3-4) ====== */}
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

        {/* ====== FOTO (col 5, filas 5-10) DEBAJO DE EXPERIENCIA ====== */}
        <div className="col-start-5 col-span-1 row-start-5 row-span-8 rounded-lg shadow-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={miImagen}
            alt="Osvaldo"
          />
        </div>

        {/* ====== FOLLOW ME (col 1, filas 6-7) ====== */}
        <div className="bg-gray-900 shadow-xl h-full flex flex-col p-3">
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
                <img
                  src={github}
                  alt="GitHub"
                  className="h-7 w-7 filter invert"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-7 w-7 filter invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ====== GRIS 1 (col 3, filas 6-7) ====== */}
        <div className="bg-gray-900 col-start-3 col-span-2 row-start-6 row-span-4 rounded-lg shadow-xl" />

        {/* ====== GRIS 2 (col 4, filas 6-7) ====== */}
        <div className="bg-red-900 col-start-1 col-span-2 row-start-6 row-span-4 " />

        {/* ====== GRIS 3 (col 1, filas 8-9) ====== */}
        <div className="bg-blue-900 col-start-1 col-span-2 row-start-10 row-span-3 rounded-lg shadow-xl" />

        {/* Puedes agregar más bloques si quieres aprovechar filas 10-12 */}

        {/* ====== MY CV (col 2, filas 6-7) ====== */}
        <a href="/cv-osvaldo-ochoa.pdf" download className="">
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
