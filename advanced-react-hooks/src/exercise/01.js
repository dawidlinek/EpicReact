// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({ initialCount = 0, step = 1 }) {
  function countReducer(state, {action, step = 1}) {
    return {
      'INCREMENT': {count: state.count + step},
    }[action] ?? state
  }
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
