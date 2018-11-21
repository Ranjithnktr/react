import React, { Component } from 'react';
import SideBar from './sidebar';
import NavBar from './navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from '../pages/home/dashboard';
import UserProfile from '../pages/home/userprofile';

class MasterLayout extends Component {
    state = {}
    render() {
        return (<React.Fragment>
            <div className="wrapper">
                <SideBar />
                <div className="main-panel">
                    <NavBar />
                    <div className="content">
                        <div className="container-fluid">
                            <Route exact path="/dashboard" component={DashBoard} />
                            <Route exact path="/userprofile" component={UserProfile} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default MasterLayout;