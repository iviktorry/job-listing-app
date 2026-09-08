import Offer from "./Offer";

export default function OffersList({ data, handleClick, style, filters }) {
  const filteredData = data.filter((item) => {
    const criteria = [
      item.role,
      item.level,
      ...(item.languages || []),
      ...(item.tools || []),
    ];
    return filters.every((filter) => criteria.includes(filter));
  });

  return (
    <div className="flex flex-col gap-10 justify-center">
      {filters.length === 0
        ? data.map((item) => (
            <Offer
              key={item.id}
              company={item.company}
              logo={item.logo}
              isNew={item.new}
              featured={item.featured}
              position={item.position}
              posted={item.postedAt}
              contract={item.contract}
              location={item.location}
              level={item.level}
              role={item.role}
              languages={item.languages}
              tools={item.tools}
              handleClick={handleClick}
              style={style}
            />
          ))
        : filteredData.map((item) => (
            <Offer
              key={item.id}
              company={item.company}
              logo={item.logo}
              isNew={item.new}
              featured={item.featured}
              position={item.position}
              posted={item.postedAt}
              contract={item.contract}
              location={item.location}
              level={item.level}
              role={item.role}
              languages={item.languages}
              tools={item.tools}
              handleClick={handleClick}
              style={style}
            />
          ))}
    </div>
  );
}
