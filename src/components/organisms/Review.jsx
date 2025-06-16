import { useState, useOptimistic, useActionState } from "react";
import Input from "../atoms/Input";
import SubmitButton from "../molecules/SubmitButton";
import Text from "../atoms/Text";
import List from "../molecules/List";

export default function Review() {
  const [ReviewText, setReviewText] = useState("");

  //낙관적 업데이트 상태, 상태변경 함수 생성
  const [optimisticReviews, updateOptimisticReviews] = useOptimistic([], (prev, newReview) => [newReview, ...prev]);
  const optimisticUpdate = (newReview) => updateOptimisticReviews(newReview);

  //낙관적 업데이트를 활용한 비동기 리뷰등록 서버 액션
  const handleReviewSubmit = async (prevState, formData) => {
    const newReview = {
      id: Date.now(),
      text: formData.get("reviewText"),
      movieId: formData.get("movieId"),
      date: new Date().toLocaleString(),
    };

    optimisticUpdate(newReview);
    const newState = { reviews: [newReview, ...prevState.reviews] };
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setReviewText("");
    return newState;
  };

  //폼 초기화 함수
  const handleReset = () => setReviewText("");

  // useActionState 서버 액션 등록
  const [state, formAction] = useActionState(handleReviewSubmit, {
    reviews: [],
  });

  //낙관적 업데이트가 적용된 화면 출력동 리뷰 데이터
  const ReviewsToDisplay = [...optimisticReviews, ...state.reviews];

  return (
    <>
      {/* 리뷰 출력 영역 */}
      <article className="w-full h-3/5 overflow-y-auto order-1 max-xl:order-2">
        <List data={ReviewsToDisplay} className="[&>li]:py-3 [&>li]:px-5 [&>li]:mb-2">
          {(el) => (
            <>
              <Text tag="h2" className="font-bold mb-1">
                {el.text}
              </Text>
              <Text className="text-xs opacity-60">{el.date}</Text>
            </>
          )}
        </List>
      </article>

      {/* 리뷰 입력 폼 영역 */}
      <article className="glass w-full h-2/5 pt-4 order-2 max-xl:order-1 max-xl:mb-6">
        <Text tag="h2" className="text-base font-bold mb-4">
          Leave a Review
        </Text>

        <form action={formAction}>
          <Input
            tag="textarea"
            name="reviewText"
            value={ReviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="영화 리뷰를 작성하세요"
            rows={6}
            required
            className="h-30 mb-2 placeholder:text-theme-[0.5]"
          />
          <SubmitButton handleReset={handleReset} />
        </form>
      </article>
    </>
  );
}
