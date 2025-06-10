export default function Spinner() {
  return (
    <section className="flex-center bg-theme-[0.5] fixed backdrop-blur z-40">
      <div className="size-20 border-4 border-theme3 border-t-transparent rounded-full animate-spin" />
    </section>
  );
}
