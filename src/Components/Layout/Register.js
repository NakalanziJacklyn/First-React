import React, { Component } from "react";

class Register extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <h1 className="move">Register page</h1>
        <div className="container" id="see">
          <h5 className="card-title text-center">Register</h5>
          <form className="form-signin">
            <div className="form-label-group">
              <input
                type="text"
                id="inputUserame"
                className="form-control"
                placeholder="Username"
                required
                autofocus
              />
              {/* <label for="inputUserame">Username</label> */}
            </div>

            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
              />
              {/* <label for="inputEmail">Email address</label> */}
            </div>
            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
              />
              {/* <label for="inputPassword">Password</label> */}
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputConfirmPassword"
                className="form-control"
                placeholder="Password"
                required
              />
              {/* <label for="inputConfirmPassword">Confirm password</label> */}
            </div>

            <button>
              <a className="d-block text-center mt-2 small" href="Login">
                Register
              </a>
            </button>
            <a className="d-block text-center mt-2 small" href="Login">
              Sign In
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
