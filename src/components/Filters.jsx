export default function Filters({ filters, style }) {
  return (
    <div className="flex justify-between relative -top-8 px-4 py-4 lg:h-18 lg:px-10 rounded-lg shadow-xl shadow-green-400/20 bg-white">
      <div className="flex gap-4 items-center flex-wrap">
        {filters.map((item, index) => (
          <div className="flex h-fit items-center rounded-sm  overflow-hidden">
            <span key={index} className={`${style}`}>
              {item}
            </span>
            <button
              onClick={handleDeleteFilter}
              value={item}
              className="w-7 h-7 p-1.5 flex items-center justify-center bg-green-400 hover:bg-green-900"
            >
              <img src={removeIcon} className="" alt="remove item" />
            </button>
          </div>
        ))}
      </div>
      <button
        className="font-bold text-gray-400 hover:text-green-400 hover:underline"
        onClick={handleClearAll}
        type="reset"
      >
        Clear
      </button>
    </div>
  );
}
