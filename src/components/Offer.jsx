import OfferDescriptionButton from "./OfferDescriptionButton";

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
  handleClick,
  style,
}) {
  return (
    <article
      className={`w-full px-6 pb-5 lg:py-8 lg:flex lg:gap-6 rounded-lg shadow-xl shadow-green-400/20 bg-white ${featured ? "border-l-6 border-green-400" : ""}`}
    >
      <img
        src={logo}
        className="relative -top-6 h-12 w-12 lg:h-22 lg:w-22 lg:top-0"
        alt="logo"
      />

      <div className="flex flex-1 flex-col gap-3 -mt-4 lg:mt-0 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3 lg:gap-2">
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

          <p className="font-bold text-lg lg:text-2xl">{position}</p>

          <div className="flex gap-2 text-gray-400">
            <span>{posted}</span>
            <span>&#8226;</span>
            <span>{contract}</span>
            <span>&#8226;</span>
            <span>{location}</span>
          </div>
        </div>

        <div className="h-0 border-bs border-gray-300 lg:hidden"></div>

        <div className="flex gap-4 flex-wrap lg:items-center">
          <OfferDescriptionButton
            style={style}
            handleClick={handleClick}
            item={role}
          />

          <OfferDescriptionButton
            style={style}
            handleClick={handleClick}
            item={level}
          />
          {languages.map((item, index) => (
            <OfferDescriptionButton
              style={style}
              handleClick={handleClick}
              item={item}
              key={index}
            />
          ))}

          {tools.map((item, index) => (
            <OfferDescriptionButton
              style={style}
              handleClick={handleClick}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
