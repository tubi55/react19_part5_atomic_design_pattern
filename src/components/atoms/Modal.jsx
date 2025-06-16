import { twMerge } from "tailwind-merge";

export default function Modal({ children, open, setOpen, className }) {
  return (
    <>
      {open && (
        <aside
          className={twMerge(
            "fixed backdrop-blur-3xl px-[5vw] py-[5vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl z-100 rounded",
            className
          )}
        >
          <div className="relative size-full">{children}</div>
          <span onClick={() => setOpen(false)} className="absolute cursor-pointer top-6 right-10  text-base">
            close
          </span>
        </aside>
      )}
    </>
  );
}
