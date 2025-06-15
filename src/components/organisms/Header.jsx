import { useEffect, useState } from "react";
import Logo from "../molecules/Logo";
import ToggleTheme from "../molecules/ToggleTheme";
import { twMerge } from "tailwind-merge";

export default function Header({ scrollTarget }) {
  const [Blur, setBlur] = useState(false);

  const headerStyle = "fixed w-full flex-between items-center px-[10vw] py-6 z-100";

  useEffect(() => {
    const target = scrollTarget?.current;
    if (!target) return;
    const handleScroll = () => setBlur(target.scrollTop > 0);

    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [scrollTarget]);

  return (
    <header className={twMerge(headerStyle, Blur && "bg-theme2/60 backdrop-blur-sm shadow")}>
      <Logo title="DCODELAB" desc="REVIEWING THE MOVIES" />
      <ToggleTheme />
    </header>
  );
}
