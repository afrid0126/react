import React from 'react';
import Child from './Child';
function Parent() {
    const msg = "Hello this is message from parent to child get it";
    return (
        <div style={{ padding: "10px", borderRadius: "2px solid black", backgroundColor: "lightblue", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <h1>ParentComponent</h1>
            <Child message={msg} />
        </div>
    )
}
export default Parent;