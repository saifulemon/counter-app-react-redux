/*******  App structure  *********
 * 1. state = count : 0
 * 2. actions = increment, decrement, reset
 * 3. reducers =  increment --> count => count + 1
    decrement --> count => count - 1
    reset --> count => count: 0
 * 4. store
 * 5. providing store in react
 * 6. use store
*/

import { useDispatch, useSelector } from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/CounterActions";

const Counter = () => {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(incrementCounter())
    }

    const handleDecrement = () => {
      dispatch(decrementCounter())
    }

    const handleReset = () => {
      dispatch(resetCounter())
    }

  return (
    <div>
        <h2>Counter App</h2>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter