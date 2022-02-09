import React from "react";
import Board from "./Board";
import { calculateWinner } from "../Checkwinner";
import { useSelector, useDispatch } from "react-redux";
import { historyAction, jumpAction } from "../Redux/action";

const divstyle = {
  width: "200px",
  margin: "20px auto",
  fontWeight: "500",
};

const btnstyle = {
  width: "100px",
  height: "30px",
  margin: '2px',
  background: "lightblue",
  color:'black',
  border: "2px solid red",
  borderRadius : "4px"
};

const Game = () => {
  const historyData = useSelector((state) => state.history);
  console.log('historyData: ', historyData);

  const dispatch = useDispatch();

  const winner = calculateWinner(historyData.history[historyData.stepNumber]);

  //  ********************************************************************************
  const handleClick = (i) => {
    console.log('i: ', i);

    const timeInhistory = historyData.history.slice(
      0,
      historyData.stepNumber + 1
    );
    const current = timeInhistory[historyData.stepNumber];
    const rectangle = [...current];
    console.log("?", rectangle);

    if (winner || rectangle[i]) return;
    
    rectangle[i] = historyData.xIsNext ? "x" : "o";


    dispatch(
      historyAction({
        history: [...timeInhistory, rectangle],
        xIsNext: !historyData.xIsNext,
        stepNumber: timeInhistory.length,
      })
    );
  };

  //******************************** */
  const jumpto = (step) => {
    console.log("step: ", step);

    dispatch(
      jumpAction({
        xIsNext: step % 2 === 0,
        stepNumber: step,
      })
    );
  };

  // *************************************

  const renderMoves = () => {
    return historyData.history.map((_step, move) => {
      const destination = move ? `Go to move ${move}` : "Go to start";

      return (
        <li key={move}>
          <button
            style={btnstyle}
            onClick={() => {
              jumpto(move);
            }}
          >
            {destination}
          </button>
        </li>
      );
    });
  };

  return (
    <>
      <Board
        squares={historyData?.history[historyData?.stepNumber]}
        onClick={handleClick}
      />

      <div style={divstyle}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player:" + (historyData.xIsNext ? "x" : "o")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
