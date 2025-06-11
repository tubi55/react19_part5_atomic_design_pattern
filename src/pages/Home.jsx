import Text from "../components/atoms/Text";
import List from "../components/molecules/List";

export default function Home() {
  const data = [
    { text: "review1", date: "2024.06.11" },
    { text: "review2", date: "2024.06.12" },
    { text: "review3", date: "2024.06.13" },
  ];

  return (
    <section className="p-20">
      <List data={data} className="border p-3 mb-2">
        {(el) => (
          <>
            <Text tag="h2" className="text-2xl font-bold mb-1">
              {el.text}
            </Text>
            <Text>{el.date}</Text>
          </>
        )}
      </List>
    </section>
  );
}
