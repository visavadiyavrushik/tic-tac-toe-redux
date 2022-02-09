import { ActionTypes } from "./actiontype";


const initialValue = {
    history : [Array(9).fill(null)],
    stepNumber: 0 ,
    xIsNext: true
}


export const historyReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.REDUCER_ACTION:
           return state ;
        break;

    
        default: 
        return state ;
    }
}
   