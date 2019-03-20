import React, { Component, Fragment } from 'react';

class Navbar extends Component {
render(){
return(
<Fragment>
<nav className="navbar navbar-light bg-success fixed-top" >
<a className="navbar-brand"> Fresh Harvest</a>
<a clasName="navbar-link"> About</a>
<a clasName="nav-link"> Register</a>
<a clasName="nav-link"> login</a>
</nav>


</Fragment>
);
}
}
export default Navbar;