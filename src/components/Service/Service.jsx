import ServiceCard from "./ServiceCard";
import code from "../../assets/icons/service/code.png";
import document from "../../assets/icons/service/document.png";
import brush from "../../assets/icons/service/brush.png";
import flag from "../../assets/icons/service/flag.png";
import team from "../../assets/icons/service/team.png";
import adaptation from "../../assets/icons/service/adaptation.png";
import clock from "../../assets/icons/service/clock.png";
import lightbulb from "../../assets/icons/service/lightbulb.png";

function Service() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto my-12">
      <ServiceCard
        icon={code}
        title="Desarrollo Fullstack"
        description="Aplicaciones web, landing pages y mas."
      />
      <ServiceCard
        icon={document}
        title="Documentación Técnica"
        description="Guías claras y procesos documentados para equipos."
      />
      <ServiceCard
        icon={brush}
        title="Diseño y Prototipado"
        description="Wireframes y prototipos en Figma para alinear diseño y desarrollo."
      />
      <ServiceCard
        icon={flag}
        title="Liderazgo Técnico"
        description="Organización, seguimiento y asignación de tareas y roles."
      />
      <ServiceCard
        icon={team}
        title="Trabajo en Equipo"
        description="Colaboración activa, comunicación clara y feedback constante."
      />
      <ServiceCard
        icon={clock}
        title="Gestión de Tiempo"
        description="Organización y adaptabilidad para cumplir plazos en cualquier horario."
      />
      <ServiceCard
        icon={adaptation}
        title="Adaptabilidad"
        description="Aprendizaje continuo y rápida adaptación a nuevos entornos."
      />
      <ServiceCard
        icon={lightbulb}
        title="Innovación y Propuestas"
        description="Generación de ideas alineadas con los objetivos de negocio."
      />
    </section>
  );
}

export default Service;
