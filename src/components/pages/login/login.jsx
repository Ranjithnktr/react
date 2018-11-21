import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    var handleToLogin = this.props.handleToLogin;
    return (
      <React.Fragment>
        <div className="container-fluid-login">
          <div className="row div-center">
            <div className="col-lg-4 col-md-7 col-sm-8 col-center">
              <div className="card card-nav-tabs text-center">
                <div className="card-header card-header-primary">
                  <h2>TO...DO...</h2>
                </div>
                <div className="card-body">
                  <h4 className="card-title"><b>Login to access your daily todo'es</b></h4>
                  <form>
                    <div className="row text-left">
                      <div className="col-md-8 col-center col-sm-12">
                        <div className="form-group">
                          <label className="bmd-label-floating"><strong>UserName/Email Id</strong></label>
                          <input type="text" onChange={e => this.handleChange(e)} className="form-control" name="userName" disabled=""></input>
                        </div>
                      </div>
                    </div>
                    <div className="row text-left">
                      <div className="col-md-8 col-center col-sm-12">
                        <div className="form-group">
                          <label className="bmd-label-floating"><strong>Password</strong></label>
                          <input type="password" onChange={e => this.handleChange(e)} className="form-control" name="password" ></input>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <Link to="/dashboard" className="btn btn-primary">Login</Link> */}
                  <button onClick={() => handleToLogin(this.state)} className="btn btn-primary">Login</button>
                </div>
                <div className="card-footer text-muted">
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;

