import React from "react";


const squarestyle = {
  background: "lighblue",
  border: "2px solid lightblue",
  cursor: "pointer",
  outline: "none",
  fontSize:"30px",
  fontWeight: "500"
}

const Square = ({ value, onClick }) => {
  return <button style={squarestyle} onClick={onClick}>{value}</button>;
};

export default Square;
