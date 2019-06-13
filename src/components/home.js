import '../assets/css/home.css';
import flowerLine from '../assets/images/flower_line_2.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return <div className="container center home-container">
        <div className="home-image-container">
            <img src="https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_09.jpg" alt="" />
            <img src="https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_06.jpg" alt="" />
        </div>
        <img className="flower-line" src={flowerLine} alt="" />
        <h5>Please join us for our wedding celebration
            <br />
            on
            <br />
            <Link className="hover-effect" to="/events/vietnam">Sunday, June 23, 2019 in Vietnam</Link>
            <br />
            or
            <br />
            <Link className="hover-effect" to="/events/usa">Sunday, June 30, 2019 in USA</Link>
        </h5>
    </div>
}