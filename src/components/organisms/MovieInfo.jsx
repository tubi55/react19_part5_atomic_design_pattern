import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Bar from "../molecules/Bar";

export default function MovieInfo({ movieDataById, vid, setOpen }) {
  return (
    <section className="flex-wrap content-between gap-10 h-3/5 max-xl:h-auto">
      {/* 영화 타이틀 */}
      <div className="w-full not-even:font-hanna leading-none">
        {/* 국내용 번역된 제목 */}
        <Text tag="h1" className="text-[5vmax] drop-shadow-lg">
          {movieDataById.title}
        </Text>

        {/* 원래 제목 (해당 프로퍼티 정보가 있을때만 출력) */}
        {movieDataById.original_title && (
          <Text tag="h2" className="text-3xl mt-4 opacity-40 max-md:text-xl">
            {movieDataById.original_title}
          </Text>
        )}
      </div>

      {/* 영화 세부 정보 (bar 스타일) */}
      <div className="flex-wrap gap-2 font-noto text-xs font-bold mb-5">
        {/* 영화 장르인 배열 데이터는 children이 아닌 arr props로 전달 */}
        <Bar arr={movieDataById.genres.map((el) => el.name)} />
        <Bar>{movieDataById.release_date.split("-").join(".")}</Bar>
        <Bar>{movieDataById.runtime}분</Bar>
        <Bar>{movieDataById.vote_average} / 10</Bar>

        {/* 영화 상태 정보가 있을때만 Traile 모달 호출 버튼 생성 */}
        {vid && (
          <Button className="bg-black/50 shadow-black/10" onClick={() => setOpen(true)}>
            WATCH TRAILER
          </Button>
        )}
      </div>
    </section>
  );
}
