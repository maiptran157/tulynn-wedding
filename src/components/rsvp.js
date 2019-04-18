import '../assets/css/rsvp.css';
import flowerLine from '../assets/images/flower_line_1.png';
import React, { Component } from 'react';

export default class RSVP extends Component {
    render() {
        return <div className="container rsvp-container">
            <h4 className="center">You're invited!
                <br />
                <img className="flower-line" src={flowerLine} alt="" />
                <br />
                <a className="hover-effect" href="https://docs.google.com/forms/d/e/1FAIpQLSeLyGNgUzDHHAKKvoWGDUHWRnBHTnvDU4Vkm_BEh8UGUIvbLw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Click here</a> to RSVP
            </h4>
        </div>
    }
}