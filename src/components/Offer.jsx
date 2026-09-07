export default function Offer({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  posted,
  contract,
  location,
  languages,
  tools,
}) {
  const style = `text-green-400 py-1 px-2 rounded-sm font-bold bg-green-50`;
  return (
    <article className="w-full px-3 py-5 rounded-md shadow-xl shadow-green-400/20 bg-white">
      <p>{company}</p>
    </article>
  );
}
