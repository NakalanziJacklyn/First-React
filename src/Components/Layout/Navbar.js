import React, { Component, Fragment } from 'react';

class Navbar extends Component {
render(){
return(
<Fragment>
<nav className="navbar navbar-light bg-success fixed-top" >
<a className="navbar-brand" href="/"> Fresh Harvest</a>
<a clasName="nav-link" href="/About"> About</a>
<a clasName="nav-link" href="/Register"> Register</a>
<a clasName="nav-link" href="/Login"> login</a>
</nav>


</Fragment>
);
}
}
export default Navbar;