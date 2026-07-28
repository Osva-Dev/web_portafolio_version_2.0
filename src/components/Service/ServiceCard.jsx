function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-start">
      <div className="h-14 w-14 flex items-center justify-center bg-yellow-300 rounded-full mb-4 border border-yellow-300">
        <img src={icon} alt={title} className="h-8 w-8 object-contain" />
      </div>
      <h3 className="text-lg font-bold text-yellow-300">{title}</h3>
      <p className="text-sm text-gray-300 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
