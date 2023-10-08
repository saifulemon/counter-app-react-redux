/*******  App structure  *********
 * 1. state = count : 0
 * 2. actions = increment, decrement, reset
 * 3. reducers =  increment --> count => count + 1
    decrement --> count => count - 1
    reset --> count => count: 0
 * 4. store   
*/

const Counter = () => {

    const handleIncrement = () => {

    }

  return (
    <div>
        <h2>Counter App</h2>
        <h3>Counter: 0</h3>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter