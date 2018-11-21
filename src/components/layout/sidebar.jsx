import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SideBar extends Component {
    state = {}
    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.props.text === nextProps.text) return false;
        return true;
    }
    handleActiveMenu = (e) => {
        let menus = document.querySelectorAll(".nav .nav-item.active");
        menus[0].classList.remove('active');
        e.target.parentElement.classList.add('active');
    }

    render() {
        return (<div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="#" className="simple-text logo-normal">
                    To Do
        </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li onClick={e => this.handleActiveMenu(e)} className="nav-item active">
                        <Link className="nav-link" to="/dashboard" >
                            <i className="material-icons">dashboard</i>
                            Dashboard
                        </Link>
                    </li>
                    <li onClick={e => this.handleActiveMenu(e)} className="nav-item">
                        <Link className="nav-link" to="/userprofile" >
                            <i className="material-icons">person</i>
                            User Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>);
    }
}

export default SideBar;