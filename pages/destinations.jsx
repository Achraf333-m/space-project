import Image from "next/image";
import background from "@/public/destination/background-destination-desktop.jpg";
import Background from "@/components/Background";
import Carousel from "@/components/Carousel";
import Nav from "@/components/Nav";

function destinations() {
  return (
    <>
      <Background background={background} />
      <div className="pageFormat">
        <Nav />
        <Carousel />
      </div>
    </>
  );
}

export default destinations;
