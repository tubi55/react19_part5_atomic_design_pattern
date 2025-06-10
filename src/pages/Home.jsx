import Bg from "../components/atoms/Bg";
import Bar from "../components/molecules/Bar";

export default function Home() {
  const movieData = {
    genres: [
      { id: 16, name: "애니메이션" },
      { id: 878, name: "판타지" },
      { id: 28, name: "액션" },
    ],
    release_date: "2025-06-05",
    runtime: 85,
    vote_average: 9.4,
  };

  return (
    <section className="w-full h-screen flex-center">
      <Bg src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg" />

      <div className="flex-wrap gap-2 font-noto text-xs font-bold mb-5">
        <Bar arr={movieData.genres.map((el) => el.name)} />
        <Bar>{movieData.release_date.split("-").join(".")}</Bar>
        <Bar>{movieData.runtime}분</Bar>
        <Bar>{movieData.vote_average} / 10</Bar>
      </div>
    </section>
  );
}
