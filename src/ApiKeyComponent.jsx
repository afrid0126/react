import React, { useState, useEffect } from 'react';

function ApiKeyComponent() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("failed in fetch data");
                }
                return response.json();
            })
            .then((responseData) => {
                setData(responseData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading ...</h1>

    }
    if (error) {
        return <h1>{error.message}</h1>
    }
    return (
        <div style={{ padding: "10px", margin: "20px", backgroundColor: "lightblue" }}>
            <h1>Posts</h1>
            <ul>
                {data.slice(0, 10).map((item) => (
                    <li key={item.id}>
                        <strong >{item.title}</strong>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ApiKeyComponent;