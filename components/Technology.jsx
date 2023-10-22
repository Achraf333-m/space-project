import Image from "next/image";

function Technology({ style, description, name, image }) {
  return (
    <div className="md:px-24 md:py-10 px-4 py-2 space-y-8">
      <h2 className="text-center tracking-widest text-4xl font-extralight">{name}</h2>
      <div className={`flex md:${style} flex-col-reverse space-x-8 items-center justify-center`}>
        <p className="max-w-lg tracking-widest text-xl leading-10 font-extralight">
          {description}
        </p>
        <Image src={image} className="rounded-full md:p-24"/>
      </div>
    </div>
  );
}

export default Technology;
