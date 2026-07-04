import { useState } from "react";
import "./App.css";

import miImagen from "./assets/osvaldo_ochoa.jpg"; // ✅ Extensión corregida
function App() {
  return (
    <>
      <section className=" h-[550px] w-[1200px] grid grid-cols-6 grid-rows-8 gap-3 p-4">
        <div
          className="bg-red-500 col-span-2 row-span-8 rounded-lg shadow-xl
        min-h-[50px] roundede-lg"
        >
          <img className="h-full w-full object-cover" src={miImagen} alt="" />
        </div>

        <div className="bg-yellow-500 col-span-4 row-span-5 rounded-lg shadow-xl flex flex-col justify-center p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            PORTFOLIO · 2026
          </p>
          <h1 className="text-4xl font-semibold text-black mt-2">
            OSVALDO OCHOA
          </h1>

          <h2 className="text-6xl font-bold text-black ">WEB DEVELOPER JR</h2>

          <p className="text-2xl text-gray-600  uppercase">
            El inicio de una etapa enfocada en demostrar
            <br />
            compromiso, responsabilidad y profesionalismo.
          </p>
        </div>
        <div className="bg-yellow-500 col-span-1 row-span-3 rounded-lg shadow-xl min-h-[50px] roundede-lg" />
        <div className="bg-gray-900 col-span-1 row-span-3 rounded-lg shadow-xl min-h-[50px] roundede-lg" />
        <div className="bg-yellow-500 col-span-1 row-span-3 rounded-lg shadow-xl min-h-[50px] roundede-lg" />
        <div className="bg-gray-900 col-span-1 row-span-3 rounded-lg shadow-xl min-h-[50px] roundede-lg" />
      </section>
    </>
  );
}

export default App;
