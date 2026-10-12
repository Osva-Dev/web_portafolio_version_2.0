import ProjectBlock from "../Project/ProjectBlock.jsx";
import newsExplorer from "../../assets/images/news_explorer.png";
import aroundUsa from "../../assets/images/aroundusa.png";
import artGallery from "../../assets/images/artgallery.png";

function Project() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-5">
      <ProjectBlock
        number="01"
        url="https://github.com/Osva-Dev/news_explorer_frontend"
        img={newsExplorer}
        technologies="React · Vite"
        title="News Explorer"
        paragraph="A web application for browsing news, saving favorite articles, and managing your personalized content. It integrates with third-party news APIs for up-to-date information and uses mockapi.io for authentication and data persistence."
        year="2026"
      />
      <ProjectBlock
        number="02"
        url="https://github.com/Osva-Dev/web_project_api_full"
        img={aroundUsa}
        technologies="React · Vite · NodeJS · Express · MongoDB · Google Cloud"
        title="Around the USA"
        paragraph="A complete web application that allows users to share and like travel photos on a social network. It includes a custom REST API and a dynamic frontend."
        year="2026"
      />
      <ProjectBlock
        number="03"
        url="https://github.com/Osva-Dev/web_project_homeland"
        img={artGallery}
        technologies="HTML · CSS"
        title="Tripleten Art Gallery"
        paragraph="Responsive landing page consisting of a virtual art gallery. The project demonstrates the ability to lay out complex designs, implement grid systems, and create fully responsive experiences without the use of external frameworks."
        year="2025"
      />
    </div>
  );
}

export default Project;
