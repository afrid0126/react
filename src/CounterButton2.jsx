import React from 'react'
import { useState } from 'react'
function CounterButton2() {

    const [count, setCount] = useState(0);
    return (
        <div style={{
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            backgroundColor: "lightgray",
            cursor: "pointer"
        }}>
            <h1>Count :{count}</h1>
            <button style={{ cursor: "pointer" }} onClick={() => { setCount(count + 1) }}>Click Me</button>
            <button style={{ cursor: "pointer", margin: "10px" }} onClick={() => { setCount(0) }}>Reset</button>
        </div >
    )
}
export default CounterButton2;
