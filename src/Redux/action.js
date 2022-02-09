import { ActionTypes } from "./actiontype";



export const historyAction = (payload) => {
    // console.log('payload: ', payload);
    
    return {
      type: ActionTypes.REDUCER_ACTION,
      payload: payload ,
    };
  };
  