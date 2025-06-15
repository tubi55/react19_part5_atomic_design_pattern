import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  return (
    <div className="p-30">
      <h1 className="text-4xl">Movie Detail</h1>
      <h2>ID: {id}</h2>
    </div>
  );
}
