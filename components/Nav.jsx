import Image from "next/image";
import logo from "@/public/shared/logo.svg";


function Nav() {
  return (
    <nav className=" m-auto max-w-6xl h-40 flex items-center justify-between">
      <Image
        src={logo}
        alt="logo"
        className="cursor-pointer animate-pulse-slow"
      />
      <ul className="flex space-x-6 text-xl">
        <li className="listStyle">Destination</li>
        <li className="listStyle">Crew</li>
        <li className="listStyle">Technologies</li>
      </ul>
    </nav>
  );
}

export default Nav;
