export default function Bg({ src, gradient }) {
  return (
    <div className="fixed size-full opacity-50">
      <img src={src} alt="bg" className="object-cover size-full" />
      {gradient && (
        <div className="fixed size-full bg-gradient-to-b from-transparent to-theme2/80" />
      )}
    </div>
  );
}
