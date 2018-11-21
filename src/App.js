import React, { Component } from "react";
import Login from './components/pages/login/login';
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import MasterLayout from "./components/layout/masterlayout";
import DashBoard from "./components/pages/home/dashboard";
import UserProfile from "./components/pages/home/userprofile";

class App extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    user: { isAuthenticated: false }
  }
  // componentWillUpdate() {
  //   debugger;
  //   if (this.state.user.isAuthenticated != true) {
  //     this.setState({ user: { isAuthenticated: false } })
  //   }
  // }

  handleToLogin = (data) => {
    if (data.userName == 'Ranjith' && data.password == '1234') {
      // sessionStorage.setItem('isAuthenticated', true);
      this.setState({
        user: {
          isAuthenticated: true
        }
      });
      this.props.history.push('/dashboard');
    }
  }

  //Changes test
  checkIsAuthenticated() {
    let html = '';
    // let isAuthenticated=sessionStorage.getItem('isAuthenticated');
    if (this.state.user.isAuthenticated) {
      html = <MasterLayout>
      </MasterLayout>;
    } else {
      html = <Route exact path="/" render={() => <Login handleToLogin={this.handleToLogin} />} />;
    }
    return html;
  }

  render() {
    return (
      <div id="root">
        {this.checkIsAuthenticated()}
      </div>
    );
  }
}

export default withRouter(App);
