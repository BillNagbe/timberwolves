import { useState } from "react";
import Header from "./components/Header/Header-Components/Header";
import NavItem from "./components/Header/Header-Components/Nav/untility";
import Main from "./components/Main/Main";

function App() {  

  const [ mainPageStyle ] = useState(
    {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      overflow: "auto"
    }
  );


  const [ h1Style ] = useState ({
    height: "10vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid red"
  });


  const [ mainContainerStyle ] = useState({
    display: "grid",
    gridColumnTemplate: "repeat(5, 1fr)",
    flexGrow: "1"
  })
  
  return (
    <div className="main-page" style={mainPageStyle}>
      <div className="header-container" style={h1Style} >
        {/* Places content here */}
        <Header />
      </div>
      <div className="main-container" style={mainContainerStyle}>
        <div className="aside">
          {/* Place content here */}
          <ul className="unorder-list" >
            <NavItem value="Home" />
            <NavItem value="History"/>
            <NavItem value="About Us"/>
            <NavItem value="Shop"/>
          </ul>
        </div>
        {/* Sibiling element */}
        <div className="main-content">
          {/* Place content here */}
          <Main />
        </div>
      </div>
    </div>
  )
 
}

export default App;
