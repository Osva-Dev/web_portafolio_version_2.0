function HeroProcessesAndMethodologies() {
  return (
    <div className="bg-white col-start-1 col-span-6 row-start-6 row-span-2 rounded-xl shadow-sm p-4 flex flex-col">
      <h2 className="text-xs font-medium text-gray-600 self-start uppercase tracking-wider mb-2 ml-2">
        Procesos y metodologías
      </h2>
      <div className="flex flex-wrap gap-1.5 flex-1 content-start mt-2">
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
            className="bg-gray-100 text-gray-700 text-[16px] font-medium px-6 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HeroProcessesAndMethodologies;
