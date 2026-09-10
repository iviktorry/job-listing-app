export default function OfferDescriptionButton({ item, style, handleClick }) {
  return (
    <button onClick={handleClick} value={item} aria-label={`Filter by ${item}`} className={`${style} rounded-sm  hover:bg-green-400 hover:text-green-50`}>
      {item}
    </button>
  );
}
