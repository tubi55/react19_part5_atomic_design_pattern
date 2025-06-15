import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import "./index.css";
import Header from "./components/organisms/Header";
import { useRef } from "react";

export default function App() {
  const mainRef = useRef(null);

  return (
    // 스크롤이 될 프레임 요소인 main을 참조객체에 담고 heder에 전달
    <main ref={mainRef} className="w-full h-screen overflow-y-auto bg-theme text-theme transition-colors duration-1000">
      <Header scrollTarget={mainRef} />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}
