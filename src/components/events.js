import '../assets/css/events.css';
import flowerLine from '../assets/images/flower_line_1.png';
import weddingCeremonyIcon from '../assets/images/wedding_ceremony_icon.png';
import weddingReceptionIcon from '../assets/images/wedding_reception_icon.png';
import React, { Component } from 'react';
import Map from './map';

const eventsPlaces = [{
    "type": "wedding ceremony",
    "formatted_address": "10801 Stanford Ave, Garden Grove, CA 92840, USA",
    "place_id": "ChIJw41_cgwo3YARgwYIPupA1Mk",
    "name": "Saint Columban Catholic Church",
    "time": "3:30 PM Saturday, June 29, 2019",
    "image_url": weddingCeremonyIcon,
    "direction_url": "https://goo.gl/maps/symiAFq8KkQ2"
}, {
    "type": "reception",
    "formatted_address": "3350 Avenue of the Arts, Costa Mesa, CA 92626, USA",
    "place_id": "ChIJNVK_Hiff3IARlbeVYH8aywg",
    "name": "Avenue of the Arts Costa Mesa",
    "time": "5:00 PM Sunday, June 30, 2019",
    "image_url": weddingReceptionIcon,
    "direction_url": "https://goo.gl/maps/oUmHZ3yKfPdAPudL8"
}
]

export default class Events extends Component {
    renderEventDetail() {
        return eventsPlaces.map((place) => {
            return <div className="single-event" key={place.place_id}>
                <h4><img src={place.image_url} alt="" /><span>{place.type}</span></h4>
                <p>
                    {place.time}
                    <br />
                    {place.name}
                    <br />
                    {place.formatted_address}
                    <br />
                    <i className="material-icons">directions</i><a href={place.direction_url} target="_blank" rel="noopener noreferrer" className="get-directions hover-effect">Get directions</a>
                </p>
            </div>
        })
    }

    render() {
        return <div className="container events-container">
            <h4 className="center">Events
                <br />
                <img className="flower-line" src={flowerLine} alt="" />
            </h4>
            <div className="container event-map-and-detail-container">
                <Map />
                <div className="event-detail-container">
                    {this.renderEventDetail()}
                </div>
            </div>
        </div>
    }
}   