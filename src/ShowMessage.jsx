import React, { useState } from 'react';
import DisplayMessage from './DisplayMessage';
function ShowMessage() {
    const [Message, setMessage] = useState(false);

    const toggleMessage = () => {
        setMessage(prev => !prev);
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "100px" }}>
            <button onClick={toggleMessage} style={{ padding: '10px', cursor: 'pointer' }}>
                {Message ? "hide" : "show"}Message
            </button>
            {Message && <DisplayMessage />}
        </div >
    )
}
export default ShowMessage;