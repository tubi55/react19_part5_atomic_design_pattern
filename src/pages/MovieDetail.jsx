import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bg from "../components/atoms/Bg";
import Spinner from "../components/atoms/Spinner";
import MovieInfo from "../components/organisms/MovieInfo";
import Synopsis from "../components/organisms/Synopsis";
import Review from "../components/organisms/Review";
import Trailer from "../components/organisms/Trailer";

export default function MovieDetail() {
  const { id } = useParams();

  const [movieDataById, setMovieDataById] = useState(null);
  const [loading, setLoading] = useState(true);

  const [vid, setVid] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = "https://api.themoviedb.org/3/movie";
      const API_KEY = "4cf85a609f260b43cf0278ad12483b46";
      const REQ_URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;
      //영화 예고편 요청 URL
      const REQ_TRAILER = `${BASE_URL}/${id}/videos?api_key=${API_KEY}`;

      try {
        const response = await fetch(REQ_URL);
        const dataMovie = await response.json();
        setMovieDataById(dataMovie);

        //영화 예고편 영상 요청
        const responseTrailer = await fetch(REQ_TRAILER);
        const dataTrailer = await responseTrailer.json();
        //반환받은 데이터중 Trailer 타입이고 유튜브 영상만 필터링
        const officialTrailer = dataTrailer.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");

        //필터링된 데이터가 있을때만 상태에 등록
        if (officialTrailer) setVid(officialTrailer);
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
            <MovieInfo movieDataById={movieDataById} vid={vid} setOpen={setOpen} />
            <Synopsis movieDataById={movieDataById} />
          </div>

          {/* 영화 리뷰 작성 영역 */}
          <div className="flex-wrap w-3/12 h-full font-noto max-xl:w-full">
            <Review />
          </div>

          {/* 영화 예고편 모달 */}
          <Trailer open={open} setOpen={setOpen} vid={vid} />
        </>
      )}
    </div>
  );
}
