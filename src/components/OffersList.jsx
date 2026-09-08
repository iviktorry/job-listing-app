import Offer from "./Offer";

export default function OffersList({ data, handleClick, style }) {
  return (
    <div className="flex flex-col gap-10 justify-center">
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
          handleClick={handleClick}
          style={style}
        />
      ))}
    </div>
  );
}
