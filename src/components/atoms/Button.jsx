import { twMerge } from "tailwind-merge";

//props (className: 버튼 스타일, children: 버튼 내용, onClick: 클릭 이벤트 핸들러)
export default function Button({ className, children, onClick }) {
  //스타일 변수
  const btnStyle = `
    inline-block px-6 py-2 rounded bg-theme3    
    text-sm font-semibold text-white    
    shadow-lg shadow-theme3/50 
    transition-all duration-1000
    hover:bg-black hover:shadow-black/50
  `;

  return (
    //스타일 적용 및 이벤트 핸들러 연결
    <button className={twMerge(btnStyle, className)} onClick={onClick}>
      {children}
    </button>
  );
}
