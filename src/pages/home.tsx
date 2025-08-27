import SlidingLogoMarquee from "../components/sliding-logo-marquee";
import type { SlidingLogoMarqueeItem } from "../components/sliding-logo-marquee";
import { Cpu, Server, Wind, Rocket, Code2 } from "lucide-react";
const logos: SlidingLogoMarqueeItem[] = [
  {
    id: "react",
    content: <Cpu className="w-30 h-10 text-sky-500" />,
    href: "https://react.dev",
  },
  {
    id: "node",
    content: <Server className="w-30 h-10 text-green-600" />,
    href: "https://nodejs.org",
  },
  {
    id: "tw",
    content: <Wind className="w-30 h-10 text-sky-400" />,
    href: "https://tailwindcss.com",
  },
  {
    id: "vite",
    content: <Rocket className="w-30 h-10 text-purple-500" />,
    href: "https://vitejs.dev",
  },
  {
    id: "github",
    content: <Code2 className="w-30 h-10 text-gray-300" />,
    href: "https://github.com",
  },
];
export default function Home() {
  return (
    <section className="space-y-5">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 bg-shadow-pop-a10 p-8 rounded-2xl relative overflow-hidden aspect-[16/9]">
        <div className="flex items-center pl-10">
          <p className="text-white flex flex-col ">
            <span className="text-5xl font-bold">
              👋 Hola, soy Carlos Desarrollador web en formación{" "}
            </span>
            <span className="text-xl text-gray-400">
              |Apasionado por la tecnología y el aprendizaje constante.
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="src/assets/carlos.png"
            alt=""
            className="w-full absolute bottom-0 object-contain max-h-full z-40"
          />
          <img
            src="src/assets/Group.svg "
            className="absolute w-xl top-[-40px] right-6 blur-sm"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="font-extrabold text-white text-6xl font-lato text-center">
          Proyectos Destacados
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-4 text-white">
        <div className="col-span-2 row-span-5 flex flex-col justify-between p-4 rounded-2xl bg-shadow-pop-a40 bg-no-repeat bg-cover">
          <h1 className="font-black text-6xl ">01</h1>
          <div>
            <p className="text-2xl font-bold"> Gestor de Ventas </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-3 bg-pink-300 flex flex-col justify-between p-4 rounded-2xl">
          <h1 className="font-black text-4xl text-red-400 ">02</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-3 row-start-4 bg-gray-800 flex flex-col justify-between p-4 rounded-2xl min-h-64 bg-[url(src/assets/foto3.jpg)]">
          <h1 className="font-black text-4xl  text-red-400 ">03</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-4 row-start-4 bg-pink-300 flex flex-col justify-between p-4 rounded-2xl bg-[url(src/assets/foto2.jpeg)] bg-no-repeat bg-cover">
          <h1 className="font-black text-4xl  text-red-400">04</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-extrabold text-white text-6xl font-lato text-center">
            Habilidades / Tech Stack
          </h1>
        </div>
        <div>
          <SlidingLogoMarquee items={logos} height="200px" speed={80} />
        </div>
      </div>
    </section>
  );
}
