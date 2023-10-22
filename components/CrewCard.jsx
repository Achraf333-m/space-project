import Image from "next/image";

function CrewCard({ name, background, bio, role, style }) {
  return (
    <div className={`flex ${style}  flex-col justify-evenly space-y-10 p-8 md:space-x-10 md:p-20`}>
      <Image src={background} className="w-80 h-80" />
      <div className="flex flex-col space-y-8 border-b-[1px] border-[#ffffff73]">
        <h2 className="tracking-widest text-2xl font-extralight">{name}</h2>
        <h4 className="tracking-widest text-lg font-extralight">{role}</h4>

        <p className="max-w-md tracking-wide leading-10 font-light text-lg">
          {bio}
        </p>
      </div>
    </div>
  );
}

export default CrewCard;
