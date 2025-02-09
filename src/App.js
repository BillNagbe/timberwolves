import Header from "./components/Header/Header-Components/Header";
import NavItem from "./components/Header/Header-Components/Nav/untility";



function App() {  
  return (
    <div className="main-page">
      <div className="header-container">
        {/* Places content here */}
        <Header />
      </div>
      <div className="main-container">
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
        </div>
      </div>
    </div>
  )
 
}

export default App;
