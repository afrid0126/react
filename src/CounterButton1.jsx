import React from 'react'
import { useState } from 'react'
function CounterButton1() {

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
        </div >
    )
}
export default CounterButton1;
