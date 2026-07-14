import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProjectBlock from "./components/Project/ProjectBlock.jsx";
import Footer from "./components/Footer/Footer.jsx";

import newsExplorer from "./assets/images/news_explorer.png";
import aroundUsa from "./assets/images/aroundusa.png";
import artGallery from "./assets/images/artgallery.png";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      <Header />
      <Hero />
      <div className="w-full max-w-7xl mx-auto">
        <section className="text-white ">
          <p>01 · Selected work</p>
          <h2>RECENT PROJECTS</h2>
        </section>
        <div className="grid grid-cols-3 gap-6">
          <ProjectBlock
            number="01"
            img={newsExplorer}
            technologies="React · Vite"
            title="News Explorer"
            paragraph="Aplicación web para explorar noticias, guardar artículos favoritos y gestionar tu contenido personalizado. Integra la API de noticias de terceros (News API) para obtener información actualizada y utiliza mockapi.io para la autenticación y persistencia de datos."
            year="2026"
          />
          <ProjectBlock
            number="02"
            img={aroundUsa}
            technologies="React · Vite · NodeJS · Express · MongoDB · Google Cloud"
            title="Around the USA"
            paragraph="Aplicación web completa que permite a los usuarios tener una red socialcompartir y dar “me gusta” a fotografías de viajes. Incluye una API REST propia del proyecto, y un frontend dinámico."
            year="2026"
          />
          <ProjectBlock
            number="03"
            img={artGallery}
            technologies="HTML · CSS"
            title="Tripleten Art Gallery"
            paragraph="Landing Page responsive que consiste en una galería de arte virtual q. El proyecto demuestra la capacidad de maquetar diseños complejos, implementar sistemas de grid, y crear experiencias completamente responsivas sin el uso de frameworks externos."
            year="2025"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
