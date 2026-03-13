import React from 'react';
function LiteralDisplay() {
    const name = "React";
    const version = "19";
    const message = `welcome to ${name} version ${version}`
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}
export default LiteralDisplay;