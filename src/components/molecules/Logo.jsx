import Pic from "../atoms/Pic";
import Text from "../atoms/Text";

export default function Logo({
  title, // 로고 텍스트 제목 (예: "DCODELAB")
  desc, // 서브 설명 텍스트 (예: "UI/UX DEVELOPMENT")
  imgSrc, // 이미지 로고 경로 (선택적)
}) {
  return (
    <nav>
      {imgSrc && (
        <h1>
          <Pic src={imgSrc} url="/" />
        </h1>
      )}
      {title && (
        <Text tag="h1" url="/" className="font-orbitron text-2xl font-black">
          {title}
        </Text>
      )}
      {desc && (
        <Text className="font-noto text-sm font-bold tracking-wider opacity-50">
          {desc}
        </Text>
      )}
    </nav>
  );
}
