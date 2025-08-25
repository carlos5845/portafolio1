import { Link } from "react-router";
import { Menu } from "lucide-react";
export default function Header() {
  return (
    <header className="sticky top-2 z-40 pr-6 pl-6 ">
      <div className="max-w-7xl pr-6 pl-6 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 bg-gray-900/60 rounded-full mx-auto">
        <div className="h-16 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src="src/assets/logo.jpeg"
                alt=""
                className="w-12 rounded-full"
              />
            </div>
            <div>
              <Link to="/">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Daarick Lujan
                </span>
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center text-sm text-gray-400 ">
            <Link
              to="/"
              className=" hover:text-gray-200 font-sans hover:bg-amber-400 hover:px-6 hover:py-3 hover:rounded-full py-3 px-6"
            >
              Inicio
            </Link>
            <Link
              className=" hover:text-gray-200 font-sans hover:bg-amber-400 hover:px-6 hover:py-3 hover:rounded-full py-3 px-6"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className=" hover:text-gray-200 font-sans hover:bg-amber-400 hover:px-6 hover:py-3 hover:rounded-full py-3 px-6"
              to="/about"
            >
              Sobre mí
            </Link>
            <Link
              className=" hover:text-gray-200 font-sans hover:bg-amber-400 hover:px-6 hover:py-3 hover:rounded-full py-3 px-6"
              to="/videos"
            >
              Videos
            </Link>
          </nav>
          <button className="block md:hidden text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
