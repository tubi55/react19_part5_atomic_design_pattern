import Bg from "../components/atoms/Bg";

export default function Home() {
  return (
    <>
      {/* 단순 배경 이미지만 사용 */}
      <Bg src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg" />

      {/* 배경 + 그라디언트 오버레이 적용 */}
      <Bg
        src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg"
        gradient
      />
    </>
  );
}
