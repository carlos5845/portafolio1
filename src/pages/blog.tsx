import { Outlet } from "react-router";
export default function Blog() {
  return (
    <div className="">
      <h1 className="text-4xl text-white font-bold">Pagina de Dashboard</h1>
      <Outlet />
    </div>
  );
}
