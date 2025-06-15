import { useEffect, useState } from "react";
import Logo from "../molecules/Logo";
import ThemeToggler from "../molecules/ThemeToggler";
import { twMerge } from "tailwind-merge";

export default function Header({ scrollTarget }) {
  //스크롤 여부에 따라 blur효과 적용을 위한 상태
  const [blur, setBlur] = useState(false);

  //기본 헤더 스타일
  const headerStyle = "fixed w-full flex-between items-center px-[10vw] py-6 z-100";

  useEffect(() => {
    const target = scrollTarget?.current;

    //target참조값이 있을때 scroll유무에 따른 blur 상태 변경 핸들러
    if (!target) return;
    const handleScroll = () => setBlur(target.scrollTop > 0);

    //이벤트 연결 및 제거문
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [scrollTarget]);

  return (
    // 스크롤시 header의 배경을 블러처리하고 그림자 추가
    <header className={twMerge(headerStyle, blur && "bg-theme2/60 backdrop-blur-sm shadow")}>
      <Logo title="DCODELAB" desc="REVIEWING THE MOVIES" />
      <ThemeToggler />
    </header>
  );
}
