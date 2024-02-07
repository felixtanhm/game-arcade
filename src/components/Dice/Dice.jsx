function Dice({ value, showValue, rotate, onClick }) {
  let valueArr = [];
  if (value == 5) value = 9;
  for (let i = 0; i < value; i++) {
    valueArr.push(i);
  }

  const gridCols =
    value == 1 ? "grid-cols-1" : value % 2 == 0 ? "grid-cols-2" : "grid-cols-3";
  const rotateClass = rotate ? "animate-rotation" : "";
  const tiltClass = value == 2 || value == 3 ? "rotate-45" : "";

  return (
    <button
      className={`${rotateClass} bg-slate-100 rounded-lg p-3 flex flex-col h-20 w-20 md:h-28 md:w-28`}
      onClick={() => {
        onClick(value);
      }}
      disabled={!onClick}
    >
      {showValue ? (
        <span
          className={`${tiltClass} grid ${gridCols} justify-items-center items-center text-center w-full h-full`}
        >
          {value !== 9 &&
            valueArr.map((value) => {
              return (
                <span
                  key={value}
                  className="bg-slate-950 rounded-full w-4 h-4 md:w-6 md:h-6 text-center"
                ></span>
              );
            })}
          {value === 9 &&
            valueArr.map((value, index) => {
              return index % 2 == 0 ? (
                <span
                  key={value}
                  className="bg-slate-950 rounded-full w-4 h-4 md:w-6 md:h-6 text-center"
                ></span>
              ) : (
                <span
                  key={value}
                  className="rounded-full w-4 h-4 md:w-6 md:h-6 text-center"
                ></span>
              );
            })}
        </span>
      ) : (
        <span className="text-6xl md:text-8xl font-bold text-center w-full">
          ?
        </span>
      )}
    </button>
  );
}

export default Dice;
