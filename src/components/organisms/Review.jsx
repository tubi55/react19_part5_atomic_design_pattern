import { useState, useOptimistic, useActionState } from "react";
import Input from "../atoms/Input";
import SubmitButton from "../molecules/SubmitButton";
import Text from "../atoms/Text";
import List from "../molecules/List";

// 서버 액션
async function saveReview(formData) {
  const serverReview = {
    id: Date.now(),
    text: formData.get("reviewText") + " (server action)",
    date: new Date().toLocaleString(),
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return serverReview;
}

export default function Review() {
  //폼 입력값 상태 (제어 컴포넌트)
  const [reviewText, setReviewText] = useState("");

  //폼 초기화 함수
  const handleReset = () => setReviewText("");

  //서버 액션 응답 상태
  const [confirmedReview, formAction] = useActionState(async (prev, formData) => {
    const serverReview = await saveReview(formData);
    return [serverReview, ...prev];
  }, []);

  //낙관적 업데이트 상태생성
  const [optReview, addOptReview] = useOptimistic(confirmedReview, (prev, newReview) => [newReview, ...prev]);

  //낙관적 업데이트가 포함된 서버 액션 트리거
  const optFormAction = (formData) => {
    if (formData.get("reviewText").trim() === "") return alert("리뷰 내용을 작성하세요.");

    handleReset();

    const newReview = {
      id: Date.now(),
      text: formData.get("reviewText") + " (optimistic)",
      date: new Date().toLocaleString(),
    };

    addOptReview(newReview);
    formAction(formData);
  };

  return (
    <>
      {/* 리뷰 출력 영역 */}
      <article className="w-full h-3/5 overflow-y-auto order-1 max-xl:order-2">
        <List data={optReview} className="[&>li]:py-3 [&>li]:px-5 [&>li]:mb-2">
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

        <form action={optFormAction}>
          <Input
            tag="textarea"
            name="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="영화 리뷰를 작성하세요"
            rows={6}
            className="h-30 mb-2 placeholder:text-theme-[0.5]"
          />
          <SubmitButton handleReset={handleReset} />
        </form>
      </article>
    </>
  );
}
