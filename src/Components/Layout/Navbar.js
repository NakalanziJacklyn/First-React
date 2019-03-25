import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import "../../mine.css"


class Navbar extends Component {
render(){
return(
<Fragment>
<div>
<nav className="navbar navbar-light bg-success fixed-top" >
<div className="container">
<div clasName="navbar-header">
<ul className="nav navbar-nav">
<li><Link to={"/slider"}>Fresh Harvest</Link></li>
<li><Link to={"/about"}>About</Link></li>
<li><Link to={"/login"}>Login</Link></li>
<li><Link to={"/register"}>Register</Link></li>
<li><Link to={"/quality"}>Quality</Link></li>
<li><Link to={"/pricing"}>Pricing</Link></li>
</ul>
</div>

</div>
</nav>
</div>


</Fragment>
);
}
}
export default Navbar;