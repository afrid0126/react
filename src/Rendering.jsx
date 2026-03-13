import React from 'react';

function Rendering() {
    const students = ['Alice', 'Bob', 'David', 'Eve', 'Fariyam', 'Gani', 'Hasan'];

    return (
        <div style={{
            padding: "10px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>List of students</h1>
            <ul style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid black",
                borderRadius: "5px",
                width: "40em ",
                backgroundColor: "lightblue"
            }}>
                {students.map((student, index) => (
                    <li style={{ padding: "10px", margin: "10px", border: "2px solid black", borderRadius: "5px", backgroundColor: "lightblue", width: "17em" }} key={index}>{student}</li>
                ))}
            </ul>
        </div>

    )
}
export default Rendering;
