import M from 'materialize-css';
import '../assets/css/photos.css';
import React, { Component } from 'react';
import flowerLine from '../assets/images/flower_line_1.png';
import photos1 from '../assets/images/photos_1.jpg';
import photos2 from '../assets/images/photos_2.jpg';
import photos3 from '../assets/images/photos_3.jpg';
import photos4 from '../assets/images/photos_4.jpg';
import photos5 from '../assets/images/photos_5.jpg';
import photos6 from '../assets/images/photos_6.jpg';
import photos7 from '../assets/images/photos_7.jpg';

const photos = [photos1, photos2, photos3, photos4, photos5, photos6, photos7];

export default class Photos extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems);
    }
    renderPhoto() {
        return photos.map((photoUrl, index) => {
            return <a key={index} className="carousel-item" href={`#photo${index}!`}><img alt={`wedding${index}`} src={photoUrl} /></a>;
        })
    }
    render() {
        return <div className="container photo-container">
            <h4 className="center">Photos
            <br />
                <img className="flower-line" src={flowerLine} alt="" />
            </h4>
            <div className="carousel">
                {this.renderPhoto()}
            </div>
        </div>
    }
}