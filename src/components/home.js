import '../assets/css/home.css';
import flowerLine from '../assets/images/flower_line_2.png';
import React from 'react';
import homeImage1 from '../assets/images/home_1.jpg';
import homeImage2 from '../assets/images/home_2.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return <div className="container center home-container">
        <div className="home-image-container"><img src={homeImage1} alt="" />
            <img src={homeImage2} alt="" />
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