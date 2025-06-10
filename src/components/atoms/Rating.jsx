import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function Rating({
  value, // 표시할 실제 점수 값 (예: 4.5, 9.7 등)
  total = 10, // 점수의 총 기준값 (기본: 10점 만점)
  rates = 5, // 출력할 별 아이콘 수 (기본: 5개)
  className, // 외부에서 전달하는 추가 스타일 클래스
}) {
  // 점수 비율을 기준으로 출력할 별 개수 계산
  const starsCount = Math.round((value / total) * rates);

  return (
    <p className="flex gap-1 text-xs">
      {Array(starsCount)
        .fill()
        .map((_, idx) => (
          <span
            key={idx}
            className={twMerge(
              "inline-block text-theme-point text-xs",
              className
            )}
          >
            <FaStar />
          </span>
        ))}
    </p>
  );
}
