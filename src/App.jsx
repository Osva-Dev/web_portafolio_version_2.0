import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Project from "./components/Project/Project.jsx";
import Service from "./components/Service/Service.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      <Header />
      <Hero />
      <div className="w-full max-w-7xl mx-auto mt-25">
        <div className="text-white ">
          <p className="text-3xl font-black tracking-tight text-gray-100">
            01 · Selected work
          </p>
          <h2 className="text-2xl">RECENT PROJECTS</h2>
        </div>
        <Project />
      </div>
      <div className="w-full max-w-7xl mx-auto mt-25">
        <div className="text-white ">
          <p className="text-3xl font-black tracking-tight text-gray-100">
            02 · Services
          </p>
          <h2 className="text-2xl">WHAT I CAN CONTRIBUTE</h2>
        </div>
      </div>
      <Service />
      <Footer />
    </div>
  );
}

export default App;
