// * 3. reducers =  increment --> count => count + 1
// decrement --> count => count - 1
// reset --> count => count: 0
import { decrement, increment, reset } from "../constants/CounterConstant";

const initialcounter = { count: 0 };

const countReducer = (state = initialcounter, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };

    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    case reset:
      return {
        ...state,
        count: 0,
      };

    default:
    return state;
  }
};

export default countReducer;