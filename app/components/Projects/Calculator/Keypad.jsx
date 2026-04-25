import { Key } from "./Key";

const Keys = [
  { value: "!", style: "operator", key: 0 },
  { value: "7", style: "number", key: 1 },
  { value: "4", style: "number", key: 2 },
  { value: "1", style: "number", key: 3 },
  { value: "0", style: "number", key: 4 },
  { value: "C", style: "operator", key: 5 },
  { value: "8", style: "number", key: 6 },
  { value: "5", style: "number", key: 7 },
  { value: "2", style: "number", key: 8 },
  { value: "000", style: "number", key: 9 },
  { value: "⌫", style: "operator", key: 10 },
  { value: "9", style: "number", key: 11 },
  { value: "6", style: "number", key: 12 },
  { value: "3", style: "number", key: 13 },
  { value: ".", style: "number", key: 14 },
  { value: "÷", style: "operator", key: 15 },
  { value: "×", style: "operator", key: 16 },
  { value: "-", style: "operator", key: 17 },
  { value: "+", style: "operator", key: 18 },
  { value: "=", style: "submit", key: 19 },
];

export function Keypad({ backspace, reset }) {
  return (
    <div className="mt-7 w-50 grid grid-cols-4 grid-rows-5 grid-flow-col gap-2">
      {Keys.map((btn) => {
        return (
          <div
            className="w-full h-full bg-gray-700 hover:bg-gray-900 rounded-xl flex items-center justify-center cursor-pointer active:scale-90"
            key={btn.key}
            onClick={() => {
              if (btn.key === 10) {
                return backspace();
              } else if (btn.key === 5) {
                return reset();
              }
            }}
          >
            <Key label={btn.value} style={btn.style} />
          </div>
        );
      })}
    </div>
  );
}
