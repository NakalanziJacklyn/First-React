import React, { Component } from 'react';


class Pages extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>
     <div classNameName="container">
    <div classNameName="row">
      <div classNameName="col-lg-10 col-xl-9 mx-auto">
        <div classNameName="card card-signin flex-row my-5">
          <div classNameName="card-img-left d-none d-md-flex">
             {/* <!-- Background image for card set in CSS! --> */}
          </div>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Login</h5>
            <form classNameName="form-signin">
              <div classNameName="form-label-group">
                <input type="email" id="inputEmail" classNameName="form-control" placeholder="Email address" required />
                {/* <label for="inputEmail">Email address</label> */}
              </div>
                <div classNameName="form-label-group">
                <input type="password" id="inputPassword" classNameName="form-control" placeholder="Password" required />
                {/* <label for="inputPassword">Password</label> */}
              </div>
              
             <button classNameName="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
              <a classNameName="d-block text-center mt-2 small" href="#">Sign up</a>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div classNameName="container">
    <div classNameName="row">
      <div classNameName="col-lg-10 col-xl-9 mx-auto">
        <div classNameName="card card-signin flex-row my-5">
          <div classNameName="card-img-left d-none d-md-flex">
             {/* <!-- Background image for card set in CSS! --> */}
          </div>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Register</h5>
            <form classNameName="form-signin">
              <div classNameName="form-label-group">
                <input type="text" id="inputUserame" classNameName="form-control" placeholder="Username" required autofocus />
                {/* <label for="inputUserame">Username</label> */}
              </div>

              <div classNameName="form-label-group">
                <input type="email" id="inputEmail" classNameName="form-control" placeholder="Email address" required />
                {/* <label for="inputEmail">Email address</label> */}
              </div>
                <div classNameName="form-label-group">
                <input type="password" id="inputPassword" classNameName="form-control" placeholder="Password" required />
                {/* <label for="inputPassword">Password</label> */}
              </div>
              
              <div classNameName="form-label-group">
                <input type="password" id="inputConfirmPassword" classNameName="form-control" placeholder="Password" required />
                {/* <label for="inputConfirmPassword">Confirm password</label> */}
              </div>

              <button classNameName="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
              <a classNameName="d-block text-center mt-2 small" href="#">Sign In</a>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
         );
    }
}
 
export default Pages;