import Image from "next/image";

function Technology({ style, description, name, image }) {
  return (
    <div className="px-24 py-10 space-y-8">
      <h2 className="text-center tracking-widest text-4xl font-extralight">{name}</h2>
      <div className={`flex ${style} items-center justify-evenly`}>
        <p className="max-w-lg tracking-widest text-xl leading-10 font-extralight">
          {description}
        </p>
        <Image src={image} className="rounded-full p-24"/>
      </div>
    </div>
  );
}

export default Technology;
