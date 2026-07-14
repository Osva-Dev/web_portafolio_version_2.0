import arrow from "../../assets/icons/arrow.png";

function ProjectBlock({
  number,
  url,
  img,
  technologies,
  title,
  paragraph,
  year,
}) {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-800 hover:border-yellow-400/20 group flex flex-col h-full">
      <div className="flex justify-between items-center px-5 pt-5">
        <p className="text-3xl font-black tracking-tight text-gray-100 group-hover:text-yellow-400 transition-colors">
          {number}
        </p>
        <div className="p-2 rounded-full bg-gray-800/50 group-hover:bg-yellow-400/10 transition-colors">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity"
              src={arrow}
              alt="Arrow Icon"
            />
          </a>
        </div>
      </div>

      <div className="px-5 mt-4 pb-3">
        <div className="w-full h-52 md:h-60 ">
          <img
            className="w-full h-full object-cover "
            src={img}
            alt="Project Image"
          />
        </div>
      </div>

      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-yellow-400 text-xs font-semibold uppercase ">
          {technologies}
        </h3>
        <h2 className="text-xl md:text-2xl font-bold mt-1.5 leading-tight group-hover:text-yellow-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-400 text-sm mt-2 flex-1 leading-relaxed">
          {paragraph}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-gray-500 text-xs font-medium tracking-wider">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
