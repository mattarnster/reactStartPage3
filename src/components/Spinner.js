import React from 'react'
function Spinner() {
    return (
        <div>
            <img
                src={require("../images/spinner.gif")}
                style={spinStyle}
                alt='Loading...' />
        </div>
    )
}

const spinStyle = {
    width: '50px',
    display: 'block'
}
export default Spinner