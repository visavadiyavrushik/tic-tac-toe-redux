import { ActionTypes } from "./actiontype";

const initialValue = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
};

export const historyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionTypes.REDUCER_ACTION:
      var stateAction = {
        ...state,
        history: action.payload.history,
        xIsNext: action.payload.xIsNext,
        stepNumber: action.payload.stepNumber,
      };
      return stateAction;

    case ActionTypes.JUMP_ACTION:
      var jumpAction = {
        ...state,
        xIsNext: action.payload.xIsNext,
        stepNumber: action.payload.stepNumber,
      };
      return jumpAction

    default:
      return state;
  }
};
