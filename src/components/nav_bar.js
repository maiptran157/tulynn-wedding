import M from 'materialize-css';
import '../assets/css/nav_bar.css';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.checkIfHomeActive = this.checkIfHomeActive.bind(this);
        this.checkIfActive = this.checkIfActive.bind(this);
    }
    componentDidMount() {
        var sideNavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNavElems);
        var dropdownElems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdownElems);
    }
    checkIfActive(pathname) {
        var currentPath = this.props.location.pathname;
        return currentPath.includes(pathname) ? "active" : null;
    }
    checkIfHomeActive() {
        var currentPath = this.props.location.pathname;
        if (currentPath.split("")[currentPath.length - 1] === "/") {
            return "active";
        }
        return null;
    }
    render() {
        return <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <div className="brand-logo center">Tu & Lynn</div>
                    <Link to="" data-target="nav-mobile" className="left top-nav sidenav-trigger full hide-on-large-only"><i className="material-icons">menu</i></Link>
                    <ul className="left hide-on-med-and-down">
                        <li className={this.checkIfHomeActive()}><Link to="/">Home</Link></li>
                        <li className={this.checkIfActive("/rsvp")}><Link to="/rsvp">RSVP</Link></li>
                        <li className={this.checkIfActive("/photos")}><Link to="/photos">Photos</Link></li>
                        <li className={this.checkIfActive("/events")}><a href="#!" className="dropdown-trigger" data-target='dropdown1'>Events<i className="material-icons right">arrow_drop_down</i></a></li>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li className={this.checkIfActive("/events/usa")} > <Link to="/events/usa"><i className="material-icons dp48">place</i>USA</Link></li>
                            <li className="divider" tabIndex="-1"></li>
                            <li className={this.checkIfActive("/events/vietnam")} > <Link to="/events/vietnam"><i className="material-icons dp48">place</i>Vietnam</Link></li>
                        </ul>
                    </ul>
                </div>
            </nav>
            <ul id="nav-mobile" className="sidenav">
                <li className={this.checkIfHomeActive()}><Link className="waves-effect sidenav-close" to="/">Home</Link></li>
                <li><div className="divider"></div></li>
                <li className={this.checkIfActive("/rsvp")}><Link className="waves-effect sidenav-close" to="/rsvp">RSVP</Link></li>
                <li><div className="divider"></div></li>
                <li className={this.checkIfActive("/photos")}><Link className="waves-effect sidenav-close" to="/photos">Photos</Link></li>
                <li><div className="divider"></div></li>
                <li><span>Events</span></li>
                <li className={this.checkIfActive("/events/usa")}><Link className="waves-effect sidenav-close submenu" to="/events/usa"><i className="material-icons dp48">place</i><span>USA</span></Link></li>
                <li className={this.checkIfActive("/events/vietnam")}><Link className="waves-effect sidenav-close submenu" to="/events/vietnam"><i className="material-icons dp48">place</i><span>Vietnam</span></Link></li>
            </ul>
        </Fragment>

    }
}

export default withRouter(NavBar);