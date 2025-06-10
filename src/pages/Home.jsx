import Card from "../components/molecules/Card";
import ThemeToggler from "../components/molecules/ThemeToggler";

export default function Home() {
  const data = {
    id: 1,
    title: "베이워치: SOS 해상 구조대",
    poster_path:
      "https://image.tmdb.org/t/p/w342/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    vote_average: 7.8,
  };

  return (
    <section className="w-full h-screen bg-theme p-20">
      <ThemeToggler className="mb-10" />
      <Card data={data} />
    </section>
  );
}
