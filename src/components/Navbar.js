import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    setMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 150);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center font-sans pt-2 pb-2 bg-transparent">
      <Link
        href="/"
        className="p-2 md:pl-10 font-bold text-lg text-white cursor-pointer"
      >
        ACENDA
      </Link>
      <div className="hidden sm:flex p-2 cursor-pointer">
        <Link href="/" className="text-white pl-4 md:pl-10">
          HOME
        </Link>
        <Link href="/places" className="text-white pl-4 md:pl-10">
          PLACES
        </Link>
        <Link href="/favourites" className="text-white pl-4 md:pl-10 md:mr-10">
          FAVOURITES
        </Link>
      </div>
      <div
        className="sm:hidden p-2 cursor-pointer text-white"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={24} />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <div className="cursor-pointer" onClick={() => handleNavigation("/")}>
            HOME
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleNavigation("/places")}
          >
            PLACES
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleNavigation("/favourites")}
          >
            FAVOURITES
          </div>
        </div>
      </div>
    </div>
  );
}
