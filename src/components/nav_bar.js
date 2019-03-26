import M from 'materialize-css';
import '../assets/css/nav_bar.css';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.checkIfHomeActive = this.checkIfHomeActive.bind(this);
        this.checkIfActice = this.checkIfActice.bind(this);
    }
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }
    checkIfActice(pathname) {
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
                        <li className={this.checkIfActice("/rsvp")}><Link to="/rsvp">RSVP</Link></li>
                        <li className={this.checkIfActice("/photos")}><Link to="/photos">Photos</Link></li>
                        <li className={this.checkIfActice("/events")}><Link to="/events">Events</Link></li>
                    </ul>
                </div>
            </nav>
            <ul id="nav-mobile" className="sidenav">
                <li className={this.checkIfHomeActive()}><Link className="waves-effect" to="/">Home</Link></li>
                <li><div class="divider"></div></li>
                <li className={this.checkIfActice("/rsvp")}><Link className="waves-effect" to="/rsvp">RSVP</Link></li>
                <li><div class="divider"></div></li>
                <li className={this.checkIfActice("/photos")}><Link className="waves-effect" to="/photos">Photos</Link></li>
                <li><div class="divider"></div></li>
                <li className={this.checkIfActice("/events")}><Link className="waves-effect" to="/events">Events</Link></li>
            </ul>
        </Fragment>

    }
}

export default withRouter(NavBar);