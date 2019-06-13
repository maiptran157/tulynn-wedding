import M from 'materialize-css';
import '../assets/css/photos.css';
import React, { Component } from 'react';
import flowerLine from '../assets/images/flower_line_1.png';

const photos = [
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_08.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_01.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_02.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_03.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_09.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_06.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_05.jpg",
    "https://tulynn-wedding.s3-us-west-1.amazonaws.com/tulynn_wedding_photo_10.jpg",
];

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