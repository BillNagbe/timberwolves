import { useState } from "react";


function Header(props) {
    const [style] = useState({
        alignSelf: "center",
        justifySelf: "center"
    })
    return (
        <div style={style}>
        <h1>{props.headerTitle}</h1>
        </div>
    )
}

export default Header;