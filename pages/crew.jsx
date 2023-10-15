import Background from "@/components/Background";
import CrewCard from "@/components/CrewCard";
import Nav from "@/components/Nav";
import Tab from "@/components/ui/Tab";
import backgroundImage from "@/public/crew/background-crew-desktop.jpg";
import anoush from "@/public/crew/image-anousheh-ansari.png";
import douglas from "@/public/crew/image-douglas-hurley.png";
import mark from "@/public/crew/image-mark-shuttleworth.png";
import victor from "@/public/crew/image-victor-glover.png";
import { crew } from '@/data.json'

function crew() {
  return (
    <>
      <Tab name={"Crew"} />
      <Background background={backgroundImage} />
      <div className="pageFormat !overflow-y-visible">
        <Nav />
        <CrewCard background={anoush} style={'flex-row'} name={crew[]} description={} />
        <CrewCard />
        <CrewCard />
      </div>
    </>
  );
}

export default crew;
