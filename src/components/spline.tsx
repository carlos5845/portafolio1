import Spline from "@splinetool/react-spline";

export default function Carta() {
  return (
    <div className="w-96 h-96 max-w-7xl bg-transparent relative ">
      <Spline scene="https://prod.spline.design/PgW01j2so-8KvZPb/scene.splinecode" />
      <div className="w-48 h-auto p-3 rounded-full bg-amber-400 absolute bottom-0 right-0">
        hola
      </div>
    </div>
  );
}
