import Image from "next/image";

function Planet({ name, image, description, distance, travel }) {
  return (
    <>
      <h2 className="text-center text-3xl tracking-widest mb-10 font-extralight">{name}</h2>
      <div className="flex justify-evenly items-center w-full space-x-4 !transition-all">
        <Image src={image} className="w-40 h-40 object-contain" />
        <div className="flex flex-col space-y-4 font-extralight">
          <h3 className="max-w-lg">{description}</h3>
          <h4>Distance: {distance}</h4>
          <h4>Travel: {travel}</h4>
        </div>
      </div>
    </>
  );
}

export default Planet;
