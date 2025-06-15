import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/:id" element={<MovieDetail />} />
    </Routes>
  );
}
