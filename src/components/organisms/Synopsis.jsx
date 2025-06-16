import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function Synopsis({ movieDataById }) {
  const navigate = useNavigate();

  return (
    <section className="glass flex-between h-2/5 p-5 max-xl:h-auto max-xl:mb-20">
      {/* 영화 포스터 */}
      <img
        src={`https://image.tmdb.org/t/p/w342${movieDataById.poster_path}`}
        alt={movieDataById.title}
        loading="lazy"
        className="w-1/5 h-full max-md:w-full max-md:h-auto max-md:mb-5"
      />

      {/* 영화 줄거리 영역 박스 */}
      <article className="w-4/5 pl-5 max-md:w-full max-md:pl-0">
        {/* 해당 영화의 태그라인이 있을때만 출력 */}
        {movieDataById.tagline && (
          <Text tag="h3" className="text-3xl font-dongle mb-4">
            {movieDataById.tagline}
          </Text>
        )}

        {/* 영화 줄거리 */}
        <Text className="mb-8 text-sm opacity-60 max-2xl:mb-4">
          {movieDataById.overview ? movieDataById.overview : "해당 영화는 제공되는 줄거리 요약이 없습니다."}
        </Text>

        {/* 이전 페이지 가기 버튼 */}
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </article>
    </section>
  );
}
