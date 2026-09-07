export default function Offer({ company, logo, new, featured, position, role, level, posted, contract, location, languages, tools }) {
  return (
    <article className="w-full px-3 py-5 rounded-md shadow-xl shadow-green-400/20 bg-white">
      <p>{company}</p>
    </article>
  );
}
