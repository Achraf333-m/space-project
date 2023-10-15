import Image from "next/image";

function CrewCard({ name, background, description, style }) {
  return (
    <div className={`flex ${style} space-x-10 p-20`}>
      <Image src={background} className="w-80 h-80" />
      <div className="flex flex-col space-y-8 border-b-[1px] border-[#ffffff73]">
        <h2 className="tracking-widest text-2xl font-extralight">{name}</h2>
        <p className="tracking-wide leading-10 font-light text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CrewCard;
