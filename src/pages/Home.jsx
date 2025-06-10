import Button from "../components/atoms/Button";

export default function Home() {
  return (
    <section className="p-20 flex gap-10">
      <Button>button1</Button>
      <Button className="bg-black shadow-black/30">button2</Button>
      <Button onClick={() => alert("Clicked!!")}>button3</Button>
    </section>
  );
}
