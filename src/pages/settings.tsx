import { useParams } from "react-router";
export default function Settings() {
  const { id } = useParams();
  return (
    <div>
      <h1>
        Pagina de Settings
        {id}
      </h1>
    </div>
  );
}
