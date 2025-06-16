import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bg from "../components/atoms/Bg";
import Spinner from "../components/atoms/Spinner";

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
    <div className="px-[10vw] py-30">
      {movieDataById && (
        <>
          <Bg src={`https://image.tmdb.org/t/p/w1280${movieDataById.backdrop_path}`} gradient={true} />

          {loading && <Spinner />}
        </>
      )}
    </div>
  );
}
