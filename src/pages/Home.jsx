import Card from "../components/molecules/Card";

export default function Home() {
  const data = {
    id: 1,
    title: "베이워치: SOS 해상 구조대",
    poster_path:
      "https://image.tmdb.org/t/p/w342/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    vote_average: 7.8,
  };

  return (
    <section className="p-20">
      <Card data={data} />
    </section>
  );
}
