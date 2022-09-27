import React from "react";

const Error = ({errorText}) => {
    return <div style={{
        position: "absolute",
        padding: '15px',
        left: '75%',
        top: '30px',
        background: '#fff',
        borderRadius: '10px',
        width: '40%',
        textAlign: "center",
    }}>
        {errorText}
    </div>

}

export default Error