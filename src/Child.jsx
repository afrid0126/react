import React from "react";

function child(props) {
    return (
        <div style={{ padding: "10px", margin: "10px", backgroundColor: "blue", border: "2px solid black", height: "10%" }}>
            <h1>ChildComponent</h1>
            <p>{props.message}</p>
        </div>
    )
}
export default child;