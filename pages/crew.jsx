import Background from "@/components/Background";
import CrewCard from "@/components/CrewCard";
import Nav from "@/components/Nav";
import Tab from "@/components/ui/Tab";
import backgroundImage from "@/public/crew/background-crew-desktop.jpg";
import anoush from "@/public/crew/image-anousheh-ansari.png";
import douglas from "@/public/crew/image-douglas-hurley.png";
import mark from "@/public/crew/image-mark-shuttleworth.png";
import victor from "@/public/crew/image-victor-glover.png";
import { crew } from "@/data.json";
import Link from "next/link";

function Crew() {
  return (
    <>
      <Tab name={"Crew"} />
      <Background background={backgroundImage} />
      <div className="pageFormat !overflow-y-visible">
        <Nav />
        <CrewCard
          background={anoush}
          style={"flex-row"}
          name={crew[3].name}
          bio={crew[3].bio}
          role={crew[3].role}
        />
        <CrewCard
          background={douglas}
          style={"flex-row-reverse"}
          name={crew[0].name}
          bio={crew[0].bio}
          role={crew[0].role}
        />
        <CrewCard
          background={mark}
          style={"flex-row"}
          name={crew[1].name}
          bio={crew[1].bio}
          role={crew[1].role}
        />
        <CrewCard
          background={victor}
          style={"flex-row-reverse"}
          name={crew[2].name}
          bio={crew[2].bio}
          role={crew[2].role}
        />
        <Link href={'/technologies'} className="flex justify-center items-center p-24">
          <button className="btn max-w-xl">See what we're working with!</button>
        </Link>
      </div>
    </>
  );
}

export default Crew;
