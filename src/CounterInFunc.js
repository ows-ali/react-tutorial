import React, { useState } from 'react'
import DisplayCounter from './DisplayCounter'

export default function CounterInFunc() {
    const [counter, setcounter] = useState(0)

  return (
    <>
        <h2>CounterInFunc</h2>
        <button onClick={()=>setcounter(counter+1)}>Increment</button>
        <p>Count: {counter}</p>
        <button onClick={()=>setcounter(counter-1)}>Decrement</button>
        <h2>Life Cycle Methods (open console)</h2>
        <DisplayCounter counter={counter} />
    </>
    )
}
