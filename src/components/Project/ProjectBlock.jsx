import arrow from "../../assets/icons/arrow.png";

function ProjectBlock({ number, img, technologies, title, paragraph, year }) {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="flex flex-col col-span-2">
        <div className="flex justify-between">
          <p className="text-2xl font-black">{number}</p>
          <img className="h-10 w-10 " src={arrow} alt="Arrow Icon" />
        </div>
        <div>
          <img
            className="w-full h-auto rounded"
            src={img}
            alt="Project Image"
          />
          <h3 className="text-yellow-400 text-sm uppercase tracking-wider">
            {technologies}
          </h3>
          <h2 className="text-3xl font-bold mt-1">{title}</h2>
          <p className="text-gray-300 mt-2">{paragraph}</p>
          <p className="text-gray-400 text-sm mt-4">{year}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
