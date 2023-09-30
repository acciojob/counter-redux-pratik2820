// import { INCREMENT,DECREMENT } from "./actions.js/actionTypes.js";
import { INCREMENT,DECREMENT } from "../actions/actionTypes.js";

 let counterReducer = (state=0,action)=>{
    switch(action.type){
        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
        default:
            return state;
    }
}
export default counterReducer;