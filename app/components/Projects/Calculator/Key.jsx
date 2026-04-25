import { useContext } from "react";
import { KeyContexts } from "./Contexts";

export function Key({ label, style }) {
  const { arrayChanger, submit } = useContext(KeyContexts);

  return (
    <button
      className={`${style} py-2 w-full cursor-pointer rounde`}
      onClick={() => {
        arrayChanger(label);
        if (label === "=") {
          submit();
        }
      }}
    >
      {label}
    </button>
  );
}
