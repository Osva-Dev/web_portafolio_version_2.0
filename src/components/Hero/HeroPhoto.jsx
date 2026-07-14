import myImage from "../../assets/images/osvaldo_ochoa.jpg";

function HeroPhoto() {
  return (
    <div className="col-start-9 col-span-2 row-start-4 row-span-4 rounded-xl shadow-xl overflow-hidden">
      <img className="h-full w-full object-cover" src={myImage} alt="Osvaldo" />
    </div>
  );
}

export default HeroPhoto;
