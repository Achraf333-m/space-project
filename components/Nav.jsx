import Image from "next/image";
import logo from "@/public/shared/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Dropdown from "./ui/Dropdown";

function Nav() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="m-auto max-w-6xl h-40 flex items-center justify-between">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="cursor-pointer animate-pulse-slow"
        />
      </Link>

      <ul className="hidden sm:flex space-x-4 text-xl font-extralight">
        <li className="listStyle">
          {path === "/" || (
            <Link href="/"> Home</Link>
          )}
        </li>
        <li className="listStyle">
          {path === "/destinations" || (
            <Link href="/destinations"> Destination</Link>
          )}
        </li>
        <li className="listStyle">
          {path === "/crew" || <Link href="/crew"> Crew</Link>}
        </li>
        <li className="listStyle">
          {path === "/technologies" || (
            <Link href="/technologies"> Technologies</Link>
          )}
        </li>
      </ul>
      <Dropdown />
    </nav>
  );
}

export default Nav;
