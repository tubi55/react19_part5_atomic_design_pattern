import { twMerge } from "tailwind-merge";

export default function Input({
  tag: Tag = "input", //사용할 태그: input, textarea 등
  name, //name 속성
  type = "text", //input 타입: text, radio, checkbox 등
  value, //입력값 (제어 컴포넌트 용)
  onChange, //입력 이벤트 핸들러
  placeholder, //입력창 안내문구
  className, //추가 스타일
  required, //필수 입력 여부
  rows, //textarea용 줄 수 설정
}) {
  //기본 스타일 정의
  const inputStyle = `
    w-full p-3 bg-black/8 rounded
    text-xs font-noto text-theme3 leading-none 
    border border-transparent border-b-white/14
    outline-none resize-none placeholder:text-theme
  `;
  return (
    <Tag
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={twMerge(
        inputStyle,
        className,
        //일반 텍스트 입력일 경우에만 내부 그림자 추가
        type === "text" && "shadow-inner"
      )}
    />
  );
}
