import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Technology from "@/components/Technology";
import Tab from "@/components/ui/Tab";
import backgroundImage from "@/public/technology/background-technology-desktop.jpg";
import launch from "@/public/technology/image-launch-vehicle-portrait.jpg";
import cap from "@/public/technology/image-space-capsule-portrait.jpg";
import port from "@/public/technology/image-spaceport-portrait.jpg";
import { technology } from "@/data.json";
import Link from "next/link";

function technologies() {
  return (
    <>
      <Tab name={"Technologies"} />
      <Background background={backgroundImage} />
      <div className="pageFormat !overflow-y-visible">
        <Nav />
        <Technology
          image={launch}
          name={technology[0].name}
          description={technology[0].description}
          style={"flex-row"}
        />
        <Technology
          image={port}
          name={technology[1].name}
          description={technology[1].description}
          style={"flex-row-reverse"}
        />
        <Technology
          image={cap}
          name={technology[2].name}
          description={technology[2].description}
          style={"flex-row"}
        />
        <Link
          href={"/ticket"}
          className="flex justify-center items-center p-24"
        >
          <button className="btn max-w-xl">Ready to book your ticket?</button>
        </Link>
      </div>
    </>
  );
}

export default technologies;
