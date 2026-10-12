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
        title="Fullstack Development"
        description="Web aplications, landing pages and more..."
      />
      <ServiceCard
        icon={document}
        title="Technical Documentation"
        description="Clear guidelines and documented processes for teams."
      />
      <ServiceCard
        icon={brush}
        title="Design and Prototyping"
        description="Wireframes and prototypes in Figma to align design and development."
      />
      <ServiceCard
        icon={flag}
        title="Technical Leadership"
        description="Organization, monitoring and assignment of tasks and roles"
      />
      <ServiceCard
        icon={team}
        title="Teamwork "
        description="Active collaboration, clear communication, and constant feedback."
      />
      <ServiceCard
        icon={clock}
        title="Time Management"
        description="Organization and adaptability to meet deadlines at any time."
      />
      <ServiceCard
        icon={adaptation}
        title="Adaptability"
        description="Continuous learning and rapid adaptation to new environments."
      />
      <ServiceCard
        icon={lightbulb}
        title="Innovation and Proposals"
        description="Generating ideas aligned with business objectives."
      />
    </section>
  );
}

export default Service;
