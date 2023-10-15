import Image from "next/image";
import Link from "next/link";

function CardContainer({ image, name }) {
  return (
    <Link href="/destinations" className="cardContainer">
      <Image src={image} className="destinationCard" />
      <h2 className="text-lg font-light">{name}</h2>
    </Link>
  );
}

export default CardContainer;
