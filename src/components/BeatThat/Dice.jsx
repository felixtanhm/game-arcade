import { range } from "../../utils/helperFunctions";

function Dice({ value, showValue, rotate, onClick }) {
  const dotRender = value == 5 ? 9 : value;
  const valueArr = range(dotRender);

  const gridCols =
    value == 1 ? "grid-cols-1" : value % 2 == 0 ? "grid-cols-2" : "grid-cols-3";
  const rotateClass = rotate ? "animate-rotation" : "";
  const tiltClass = value == 2 || value == 3 ? "rotate-45" : "";

  return (
    <button
      className={`${rotateClass} bg-white border border-slate-900 dark:bg-slate-100 dark:border-slate-100 rounded-lg p-3 flex flex-col h-20 w-20 md:h-28 md:w-28`}
      onClick={() => {
        onClick(value);
      }}
      disabled={!onClick}
    >
      {showValue ? (
        <span
          className={`${tiltClass} grid ${gridCols} justify-items-center items-center text-center w-full h-full`}
        >
          {dotRender !== 9 &&
            valueArr.map((value) => {
              return (
                <span
                  key={value}
                  className="bg-slate-950 rounded-full w-4 h-4 md:w-6 md:h-6 text-center"
                ></span>
              );
            })}
          {dotRender === 9 &&
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
