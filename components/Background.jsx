import Image from "next/image";

function Background({ background }) {
  return (
    <Image
      src={background}
      alt=""
      className="-z-40 w-screen h-screen absolute"
    />
  );
}

export default Background;
