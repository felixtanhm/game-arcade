function Dice({ value, showValue, rotate, onClick }) {
  let valueArr = [];
  for (let i = 0; i < value; i++) {
    valueArr.push(i);
  }

  const gridCols =
    value == 1 ? "grid-cols-1" : value % 2 == 0 ? "grid-cols-2" : "grid-cols-3";
  const rotateClass = rotate ? "animate-rotation" : "";
  const tiltClass = value == 2 || value == 3 ? "rotate-45" : "";

  return (
    <div
      className={`${rotateClass} bg-slate-100 rounded-lg p-3 flex flex-col h-28 w-28`}
      onClick={() => {
        onClick(value);
      }}
    >
      {showValue ? (
        <div
          className={`${tiltClass} grid ${gridCols} justify-items-center items-center text-center h-full`}
        >
          {valueArr.map((value) => {
            return (
              <span
                key={value}
                className="bg-slate-950 rounded-full w-6 h-6 text-center"
              ></span>
            );
          })}
        </div>
      ) : (
        <span className="text-8xl font-bold text-center">?</span>
      )}
    </div>
  );
}

export default Dice;
