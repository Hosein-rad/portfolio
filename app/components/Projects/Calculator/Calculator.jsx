import { useMemo, useState } from "react";
import { Parser } from "expr-eval";
import { Keypad } from "./Keypad";
import { KeyContexts } from "./Contexts";

function Calculator() {
  const [array, setArray] = useState([]);

  const parser = useMemo(() => new Parser(), []);

  const arrayChanger = (label) => {
    if (label !== "=" && label !== "C" && label !== "⌫")
      setArray((c) => [...c, label]);
  };

  const submit = () => {
    const resultStrRaw = array.join("").replace(/×/g, "*").replace(/÷/g, "/");
    const result = parser
      .evaluate(`roundTo(${resultStrRaw},4)`)
      .toString()
      .split("");
    setArray(() => result);
  };

  const backspace = () => {
    const newArr = array.slice(0, -1);
    setArray(() => newArr);
  };

  const reset = () => {
    setArray(() => []);
  };

  return (
    <KeyContexts.Provider value={{ arrayChanger, submit }}>
      <div className="size-fit mx-10 my-7 text-[20px] flex flex-col items-center justify-center">
        {/* the whole calculator */}
        <div className="h-fit px-3 pb-7  bg-gray-800 rounded-4xl">
          {/* the display */}
          <div className="py-3 px-2 mx-auto mt-5 mb-10 w-45 min-h-13 h-fit text-lg text-black wrap-anywhere rounded-3xl bg-neutral-300 shadow-[0_10px_15px]">
            {array}
          </div>
          <Keypad backspace={backspace} reset={reset} />
        </div>
      </div>
    </KeyContexts.Provider>
  );
}

export default Calculator;
