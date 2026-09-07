import Offer from "./Offer";
import data from "../../data.json";

export default function Main() {
  return (
    <main className="bg-green-50 h-full px-6 py-8 flex flex-col gap-10">
      {data.map((item) => (
        <Offer
          key={item.id}
          company={item.company}
          logo={item.logo}
          isNew={item.new}
          featured={item.featured}
          position={item.position}
          role={item.role}
          level={item.level}
          posted={item.postedAt}
          contract={item.contract}
          location={item.location}
          languages={item.languages}
          tools={item.tools}
        />
      ))}
    </main>
  );
}
