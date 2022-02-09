import React from "react";
import Board from "./Board";
import { calculateWinner } from "../Checkwinner";
import { useSelector , useDispatch } from "react-redux";


const divstyle = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const historyData = useSelector((state) => state.history);
  console.log('historyData11: ', historyData);
  const dispatch = useDispatch();

  const winner = calculateWinner();


  //  ********************************************************************************
  const handleClick = (i) => {
    const timeInhistory = historyData.history.slice(
      0,
      historyData.stepNumber + 1
    );
    const current = timeInhistory[historyData.stepNumber];
    const rectangle = [...current];

    if (winner || rectangle[i]) return;
    rectangle[i] = historyData.xIsNext ? "x" : "o";

    dispatch({
      type: "REDUCER_ACTION",
      payload: [...timeInhistory, rectangle] ,
    })
    
  };
  

  //******************************** */
  const jumpto = () => {
   

  };


  // *************************************

  const renderMoves = () => {
      
  }




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
