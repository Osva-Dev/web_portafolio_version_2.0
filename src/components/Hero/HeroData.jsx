function HeroData() {
  return (
    <>
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-1 ">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Status
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-[24px] font-black tracking-tight">
            Available to Work
          </h3>
        </div>
      </div>
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-2">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Experience
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-[24px] font-black tracking-tight">
            +3 Years Of Learning
          </h3>
        </div>
      </div>
      <div className="bg-gray-800 text-white h-full flex flex-col p-4 rounded-xl shadow-md col-start-9 col-span-2 row-start-3">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Made In
        </p>
        <div className="flex-1 flex items-end justify-start">
          <h3 className="text-[20px] font-black tracking-tight">
            Comitán de Domínguez, México
          </h3>
        </div>
      </div>
    </>
  );
}

export default HeroData;
