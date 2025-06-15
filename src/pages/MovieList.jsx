import { useEffect, useState, useDeferredValue, useTransition } from "react";

import Card from "../components/molecules/Card";
import Spinner from "../components/atoms/Spinner";
import FilterForm from "../components/molecules/FilterForm";

export default function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const pageNum = 3;

  // 페이지별 영화 데이터 호출 후 병합후 상태저장
  useEffect(() => {
    //페이지별 영화 데이터 fetch 함수
    const fetchMoviesByPage = async (page) => {
      const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
      const API_KEY = "4cf85a609f260b43cf0278ad12483b46";
      const LANGUAGE = "ko-KR";

      const REQ_URL = `${BASE_URL}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`;
      const response = await fetch(REQ_URL);
      const data = await response.json();
      return data.results;
    };

    //feching된 페이지별 영화 데이터 병합 함수
    const fetchMovieData = async (num) => {
      setLoading(true);

      try {
        const pages = await Promise.all(Array.from({ length: num }, (_, idx) => fetchMoviesByPage(idx + 1)));

        setMovieData(pages.flat());
      } catch (error) {
        console.error("영화 데이터를 가져오는데 실패했습니다: ", error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    //pageNum갯수만큼 페이지 데이터 병합
    fetchMovieData(pageNum);
  }, []);

  // 검색히 지연된 input값으로 영화 데이터 필터링 요청
  // 필러팅을 통한 업데이트 상태 로직 자체의 우선 순위 낮춤
  useEffect(() => {
    startTransition(() => {
      const filtered = movieData.filter((movie) => movie.title.toLowerCase().includes(deferredQuery.toLowerCase()));
      setFilteredMovies(filtered);
    });
  }, [deferredQuery, movieData]);

  return (
    <div className="p-30">
      <div className="mb-2 text-center">
        <FilterForm query={query} setQuery={setQuery} color="text-white" />
      </div>

      {(loading || isPending) && <Spinner />}

      <div className="mt-12 grid grid-cols-5 gap-10 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {filteredMovies.map((data, idx) => {
          return <Card key={`${data.id}-${idx}`} data={data} />;
        })}
      </div>
    </div>
  );
}
