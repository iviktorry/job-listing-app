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
  const style = `text-green-400 py-1 px-2 lg:h-fit rounded-sm font-bold bg-green-50`;
  return (
    <article className="w-full px-6 py-5 rounded-md flex flex-col gap-3 shadow-xl shadow-green-400/20 bg-white">
      <img src={logo} className="relative -top-7" alt="logo" />

      <div className="flex gap-6 font-bold">
        <span className="text-green-400">{company}</span>
        <div className="flex gap-2">
          {isNew && (
            <span className="px-3 text-sm rounded-xl bg-green-400 uppercase text-white flex items-center">
              New!
            </span>
          )}
          {featured && (
            <span className="px-3 text-sm rounded-xl bg-black uppercase text-white flex items-center">
              Featured
            </span>
          )}
        </div>
      </div>

      <p>{position}</p>
      <div className="flex gap-2 text-gray-400">
        <span>{posted}</span>
        <span>&#8226;</span>
        <span>{contract}</span>
        <span>&#8226;</span>
        <span>{location}</span>
      </div>
      <div className="h-0 border-bs border-gray-400"></div>

        <div className="flex gap-4 flex-wrap lg:items-center">
          <span className={`${style}`}>{role}</span>
          <span className={`${style}`}>{level}</span>
          {languages.map((item, index) => (
            <span key={index} className={`${style}`}>
              {item}
            </span>
          ))}

          {tools.map((item, index) => (
            <span key={index} className={`${style}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
