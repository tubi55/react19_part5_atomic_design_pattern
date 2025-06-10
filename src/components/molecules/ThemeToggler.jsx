import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";

export default function ThemeToggler({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //상태값에 따라 body요소에 data-mode속성을 추가, 제거 토글
  useEffect(() => {
    isDarkMode
      ? document.documentElement.setAttribute("data-mode", "dark")
      : document.documentElement.removeAttribute("data-mode");
  }, [isDarkMode]);

  return (
    <div
      className={twMerge(
        "w-14 h-7 bg-black/7 shadow-inner rounded-full p-1 border-b border-white/30",
        className
      )}
    >
      <Button
        className={twMerge(
          "size-5 bg-theme-point rounded-full p-0",
          isDarkMode ? "translate-x-0 " : "translate-x-7"
        )}
        onClick={() => setIsDarkMode((prev) => !prev)}
      />
    </div>
  );
}
