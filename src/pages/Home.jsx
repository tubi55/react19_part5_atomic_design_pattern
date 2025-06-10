import Pic from "../components/atoms/Pic";

export default function Home() {
  return (
    <section className="p-20 flex gap-20">
      <Pic
        src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg"
        className="w-100"
        auto
      />

      <Pic
        src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg"
        className="size-60"
        url="/about"
        rounded
        shadow
      />
    </section>
  );
}
