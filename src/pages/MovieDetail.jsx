import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bg from "../components/atoms/Bg";
import Spinner from "../components/atoms/Spinner";
import MovieInfo from "../components/organisms/MovieInfo";
import Synopsis from "../components/organisms/Synopsis";

export default function MovieDetail() {
  const { id } = useParams();

  //영화 데이터 및 로딩 관련 상태 추가
  const [movieDataById, setMovieDataById] = useState(null);
  const [loading, setLoading] = useState(true);

  //전달 되는 id값을 통해 영화 데이터, 로딩 상태 업데이트
  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = "https://api.themoviedb.org/3/movie";
      const API_KEY = "4cf85a609f260b43cf0278ad12483b46";
      const REQ_URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;

      try {
        const response = await fetch(REQ_URL);
        const dataMovie = await response.json();

        setMovieDataById(dataMovie);
      } catch (err) {
        console.error("데이터 로딩 중 에러 발생: ", err);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-screen flex-between px-[10vw] pt-[17vh] pb-[4vh]">
      {movieDataById && (
        <>
          <Bg src={`https://image.tmdb.org/t/p/w1280${movieDataById.backdrop_path}`} gradient={true} />

          {loading && <Spinner />}

          {/* 영화 기본 정보 호출 영역 */}
          <div className="w-9/12 h-full pr-10 max-xl:w-full max-xl:h-auto max-xl:pr-0">
            <MovieInfo movieDataById={movieDataById} />
            {/* 영화 줄거리 소개 컴포넌트 */}
            <Synopsis movieDataById={movieDataById} />
          </div>
        </>
      )}
    </div>
  );
}
