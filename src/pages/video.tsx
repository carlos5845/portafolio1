import { Outlet } from "react-router";
export default function Videos() {
  return (
    <div>
      <h1>Pagina sin Paths</h1>
      <nav></nav>
      <Outlet />
    </div>
  );
}
