import Text from "../components/atoms/Text";

export default function Home() {
  return (
    <section className="p-20 flex gap-10">
      <Text>기본 텍스트</Text>

      <Text tag="h2">섹션 제목</Text>

      <Text url="/about" className="text-pink-500">
        소개 페이지로 이동
      </Text>
    </section>
  );
}
