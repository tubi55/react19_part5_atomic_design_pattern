import { twMerge } from "tailwind-merge";

export default function Button({ className, children, onClick }) {
  const btnStyle = `
    inline-block px-6 py-2 rounded bg-theme3    
    text-sm font-semibold text-white    
    shadow-lg shadow-theme3/50 
    transition-all duration-1000
    hover:bg-black hover:shadow-black/50
  `;

  return (
    <button className={twMerge(btnStyle, className)} onClick={onClick}>
      {children}
    </button>
  );
}
