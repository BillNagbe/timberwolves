import React from "react";

const headerStyle = {
    fontSize: "1rem",
    minHeight: "fix-content",
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "0.5rem",
    border: "1px solid #78BE20",
}


function Header(props) {
    return (
        <div 
            style={headerStyle}
        >
            <h1>{props.teamName}</h1>
            <h2>{props.state}</h2>
            <h3>{props.abrv}</h3>
        </div>
    );
};


export default Header;