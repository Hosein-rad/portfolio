"use client";

import { useEffect, useState } from "react";

const GameBoard = ({ onReset }) => {
  let dots = [];
  let linesX = [];
  let linesY = [];
  let box = [];

  // taking turns and getting rewards/points for boxes
  const [player1, setplayer1] = useState(1);
  const [player2, setplayer2] = useState(0);
  const [p1point, setp1point] = useState(0);
  const [p2point, setp2point] = useState(0);
  const [movesOrder, setMovesOrder] = useState([]);
  const [movesSet, setMovesSet] = useState(new Set());

  // here are the 'conditions' in order to create a Box
  const conditions = [
    { check: ["x1", "y1", "x5", "y2"], action: "box1" },
    { check: ["x2", "y2", "x6", "y3"], action: "box2" },
    { check: ["x3", "y3", "x7", "y4"], action: "box3" },
    { check: ["x4", "y4", "x8", "y5"], action: "box4" },
    { check: ["x5", "y6", "x9", "y7"], action: "box5" },
    { check: ["x6", "y7", "x10", "y8"], action: "box6" },
    { check: ["x7", "y8", "x11", "y9"], action: "box7" },
    { check: ["x8", "y9", "x12", "y10"], action: "box8" },
    { check: ["x9", "y11", "x13", "y12"], action: "box9" },
    { check: ["x10", "y12", "x14", "y13"], action: "box10" },
    { check: ["x11", "y13", "x15", "y14"], action: "box11" },
    { check: ["x12", "y14", "x16", "y15"], action: "box12" },
    { check: ["x13", "y16", "x17", "y17"], action: "box13" },
    { check: ["x14", "y17", "x18", "y18"], action: "box14" },
    { check: ["x15", "y18", "x19", "y19"], action: "box15" },
    { check: ["x16", "y19", "x20", "y20"], action: "box16" },
  ];

  const createLine = (id, color) => {
    const line = document.getElementById(id);
    if (line) {
      line.style.backgroundColor = color;
      line.onClick = "";
      setMovesOrder((c) => [...c, id]);
      const updatedSet = new Set(movesSet);
      updatedSet.add(id);
      setMovesSet(updatedSet);
    }
  };

  const createBox = () => {
    for (const condition of conditions) {
      if (
        condition.check.every((move) => movesSet.has(move)) &&
        !document.getElementById(condition.action).style.backgroundColor
      ) {
        let boxColor = (document.getElementById(
          condition.action
        ).style.backgroundColor = document.getElementById(
          movesOrder[movesOrder.length - 1]
        ).style.backgroundColor);
        if (boxColor === "red") {
          setp2point((c) => c + 1);
          setplayer2((c) => c + 1);
          setplayer1((c) => c - 1);
        } else if (boxColor === "blue") {
          setp1point((c) => c + 1);
          setplayer2((c) => c - 1);
          setplayer1((c) => c + 1);
        }
      }
    }
  };

  const takeTurns = (id) => {
    if (player1 > 0 && player2 < 1) {
      createLine(id, "blue");
      setplayer1((c) => c - 1);
      setplayer2((c) => c + 1);
    } else if (player1 < 1 && player2 > 0) {
      createLine(id, "red");
      setplayer2((c) => c - 1);
      setplayer1((c) => c + 1);
    }
  };

  // checks if a box is created,on every move
  useEffect(() => {
    createBox();
  }, [movesOrder]);

  // create the dots
  for (let i = 1; i < 26; i++) {
    dots.push(
      <div
        className="w-2.5 h-2.5  m-5 bg-black text-center text-2xl rounded-full border-0"
        key={crypto.randomUUID()}
      ></div>
    );
  }

  //create the lines
  for (let i = 1; i < 21; i++) {
    linesX.push(
      <div
        className="ml-1.75 w-12.5 h-2.5 bg-[unset] rounded-[20px] z-10 hover:bg-gray-600 cursor-pointer duration-200"
        id={`x${i}`}
        key={`x${i}`}
        onClick={() => takeTurns(`x${i}`)}
      ></div>
    );
    linesY.push(
      <div
        className="mt-1.75 w-2.5 h-12.5 bg-[unset] rounded-[20px] z-10 hover:bg-gray-600 cursor-pointer duration-200"
        id={`y${i}`}
        key={`y${i}`}
        onClick={() => takeTurns(`y${i}`)}
      ></div>
    );
  }

  // Boxes to be created under certain 'conditions'
  for (let i = 1; i < 17; i++) {
    box.push(
      <div
        className="m-2.5 size-12.5 bg-[unset] rounded-[20px] z-10"
        id={`box${i}`}
        key={`box${i}`}
      ></div>
    );
  }

  return (
    <>
      <div className="mt-2 flex items-center justify-around text-lg">
        <p className="w-1/4 px-2 font-bold text-blue-700 border-r-2 border-b rounded-r-full">
          Blue: {p1point}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`animate-bounce ${
            player1 > 0
              ? "-translate-x-10 rotate-90"
              : "translate-x-10 -rotate-90"
          } duration-500`}
        >
          <path
            d="M12 12V2M12 19L7 14M12 19L17 14"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="w-1/4 px-2 font-bold text-red-700 text-right border-l-2 border-b rounded-l-full">
          Red: {p2point}
        </p>
      </div>

      <div className="relative" id="container">
        <div className="grid justify-center items-center text-center grid-cols-[repeat(5,1fr)] grid-rows-[repeat(5,1fr)] gap-5">
          {dots.map((item) => item)}
        </div>
        <div className="my-5 mx-7 absolute inset-0 grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(5,1fr)] gap-y-15 gap-x-1.25">
          {linesX.map((item) => item)}
        </div>
        <div className="my-7 mx-5 absolute inset-0 grid grid-cols-[repeat(5,1fr)] grid-rows-[repeat(4,1fr)] gap-y-1.25 gap-x-15">
          {linesY.map((item) => item)}
        </div>
        <div className="m-6.25 absolute inset-0 grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)]">
          {box.map((item) => item)}
        </div>
        {movesOrder.length < 40 ? (
          ""
        ) : (
          <div className="absolute inset-0 p-5 flex flex-col items-center justify-center backdrop-blur-sm rounded-2xl z-200">
            <p className="w-fit p-10 my-2.5 text-center text-[4rem] text-white bg-radial from-green-500 to-transparent rounded-[100%]">
              {p1point > p2point
                ? "BLUE WINS"
                : p2point > p1point
                ? "RED WINS"
                : "DRAW!"}
            </p>
            <button
              onClick={onReset}
              className="py-2 px-4 mt-4 size-fit bg-black rounded-full text-2xl hover:bg-purple-800 hover:scale-110 duration-200 animate-pulse hover:animate-none cursor-pointer"
            >
              play again?
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GameBoard;
