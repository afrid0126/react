import React, { useState } from 'react'

function Forms() {
    const [Data, SetData] = useState({ name: "", email: "", password: "" });
    const [submit, SetSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetData({ ...Data, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        SetSubmit(true);
    }
    return (
        <div style={{ padding: "10px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: "10px" }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={Data.name} onChange={handleChange} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={Data.email} onChange={handleChange} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={Data.password} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submit && (
                <div>
                    <h1>Name:{Data.name}</h1>
                    <h1>Email:{Data.email}</h1>
                    <h1>Password:{Data.password}</h1>
                </div>
            )}
        </div>
    )
}

export default Forms;