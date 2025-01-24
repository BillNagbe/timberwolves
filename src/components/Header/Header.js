import React from "react";

const headerStyle = {
    width: "100vw",
    fontSize: "1rem",
    minHeight: "fix-content",
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "0.5rem",
    border: "1px solid #78BE20",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0"
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