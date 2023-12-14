
import { NavLink } from 'react-router-dom'
import logo from "../images/logo-book.png"
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt="" />
    <ul>
        <NavLink to={"/"} style={{textDecoration: "none", color:"rgb(108, 108, 108)"}}>
          <li>Home</li>
          </NavLink> 
        <NavLink to={"/genre"} style={{textDecoration: "none", color:"rgb(108, 108, 108)"}}>
          <li>Genre</li>
           </NavLink>
    </ul>     
    </div>
  )
}

export default Navbar
