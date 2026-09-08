export default function Filters({ filters, style }) {
  return (
    <div className="relative -top-8 flex gap-4 items-center flex-wrap px-4 py-5 lg:h-18  rounded-lg shadow-xl shadow-green-400/20 bg-white">
      {filters.map((item, index) => (
        <span key={index} className={`${style} h-fit`}>
          {item}
        </span>
      ))}
    </div>
  );
}
