import data from "../../data.json";
import { useState } from "react";
import OffersList from "./OffersList";
import Filters from "./Filters";

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

  const style = `text-green-400 py-0.5 px-2 lg:h-fit font-bold bg-green-50`;

  return (
    <main className="bg-green-50 h-full px-6">
      <Filters filters={filters} style={`${style}`} />
      <div className="lg:max-w-300 lg:mx-auto py-8 lg:py-20">
        <OffersList data={data} handleClick={handleClick} style={`${style}`} />
      </div>
    </main>
  );
}
