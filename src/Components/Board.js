import React from "react";
import Square from "./Square";

const style = {
  width: "250px",
  height: "250px",
  border: "4px solid red",
  borderRadius: "10px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3,1fr) / repeat(3,1fr)",
};

const Board = ({ squares, onSelect }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onSelect(i)} />
      ))}
    </div>
  );
};

export default Board;
