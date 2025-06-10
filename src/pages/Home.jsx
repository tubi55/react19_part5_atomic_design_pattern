import Rating from "../components/atoms/Rating";

export default function Home() {
  return (
    <section className="p-20">
      <Rating value={4.5} className="text-2xl" />
      <br />
      <Rating value={9.7} className="text-2xl text-pink-500" />
    </section>
  );
}
