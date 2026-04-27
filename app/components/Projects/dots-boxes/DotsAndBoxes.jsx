import GameBoard from "./GameBoard";

const DotsAndBoxes = ({ onReset }) => {
  return (
    <div className="h-fit mx-2 md:mx-10 mb-5 flex flex-col justify-center items-center">
      <div className="pb-2.5 flex justify-center gap-7.5">
        <div
          id="container"
          className="mt-5 size-fit bg-gray-400 rounded-[20px]"
        >
          <GameBoard onReset={onReset} />
        </div>
      </div>
    </div>
  );
};

export default DotsAndBoxes;
