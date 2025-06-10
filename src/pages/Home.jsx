import Bg from "../components/atoms/Bg";
import Spinner from "../components/atoms/Spinner";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Bg src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg" />
      {loading && <Spinner />}
    </>
  );
}
