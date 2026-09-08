export default function OfferDescriptionButton({ item, style, handleClick }) {
  return (
    <button onClick={handleClick} value={item} className={`${style}`}>
      {item}
    </button>
  );
}
