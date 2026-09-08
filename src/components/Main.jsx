import data from "../../data.json";
import { useState } from "react";
import OffersList from "./OffersList";

export default function Main() {
  const [filters, setFilters] = useState([]);

  function handleClick(event) {
    const element = event.currentTarget.value;
    setFilters((prev) => {
      const newArr = [...prev, element];
      const uniqueArr = new Set(newArr);
      return [...uniqueArr];
    });
  }

  console.log(filters);
  return (
    <main className="bg-green-50 h-full px-6">
      <div className="lg:max-w-300 lg:mx-auto py-8 lg:py-20">
        <OffersList data={data} handleClick={handleClick} />
      </div>
    </main>
  );
}
