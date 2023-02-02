import React, { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0)
  const addCount = (change) => {
    let newCount = count
    newCount = newCount + change
    setCount(newCount)
  }
  return (
    <>
      <h1>You clicked the button {count} times.</h1>
      <div>
        <button onClick={() => addCount(-10)}>-10</button>
        <button onClick={() => addCount(-1)}>-1</button>
        <button onClick={() => addCount(-count)}>Reset</button>
        <button onClick={() => addCount(1)}>+1</button>
        <button onClick={() => addCount(10)}>+10</button>
      </div>
    </>
  )
}
