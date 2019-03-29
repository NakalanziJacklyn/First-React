import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";



class Navbar extends Component {
render(){
return(
<Fragment>
<div>
<nav className="navbar navbar-light" >
{/* <div className="container"> */}
<div className="navbar-header">
<ul className="" id="navb">
<li><Link to={"/"} className="circ">Fresh Harvest</Link></li>
<li><Link to={"/about"} className="circ">About</Link></li>
<li><Link to={"/login"} className="circ">Login</Link></li>
<li><Link to={"/register"} className="circ">Register</Link></li>
<li><Link to={"/quality"} className="circ">Quality</Link></li>
<li><Link to={"/pricing"} className="circ">Pricing</Link></li>
</ul>
</div>
{/* </div> */}
</nav>

</div>


</Fragment>
);
}
}
export default Navbar;