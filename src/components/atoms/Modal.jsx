export default function Modal({ children, open, setOpen }) {
  return (
    <>
      {open && (
        <aside className="fixed backdrop-blur-3xl px-[10vw] py-[10vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
          <div className="relative size-full">{children}</div>
          <span
            onClick={() => setOpen(false)}
            className="absolute cursor-pointer top-6 right-10 text-base"
          >
            close
          </span>
        </aside>
      )}
    </>
  );
}
