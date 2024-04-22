import {Link} from "react-router-dom";


export const Navbar = () => {
  
  return (
    <div className="nav-component">
 <div className="logoimg"><img src="codelogo.png" alt="" /></div>
        
     <h3 className="nav-Link"> <Link to={"/"}>Indentation</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component2"}>Mutable Objects</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component3"}>Immutable Objects</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component4"}>Encapsulation</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component5"}>polymorphism</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component6"}> Abstraction</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component7"}> Inheritance</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component8"}> Method Overloading</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component9"}> Method Overriding</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component10"}> Performance Optimization</Link></h3> */}
  
    </div>
  )
}
