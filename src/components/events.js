import '../assets/css/events.css';
import flowerLine from '../assets/images/flower_line_1.png';
import weddingCeremonyIcon from '../assets/images/wedding_ceremony_icon.png';
import weddingReceptionIcon from '../assets/images/wedding_reception_icon.png';
import React, { Component } from 'react';
import Map from './map';

const eventsPlaces = [{
    "destination": "USA",
    "center": {
        "lat": 33.7743,
        "lng": 117.9380
    },
    "eventDetail": [
        {
            "type": "wedding ceremony",
            "formatted_address": "10801 Stanford Ave, Garden Grove, CA 92840, USA",
            "place_id": "ChIJw41_cgwo3YARgwYIPupA1Mk",
            "name": "Saint Columban Catholic Church",
            "time": "3:30 PM Saturday, June 29, 2019",
            "location": {
                "lat": 33.778022,
                "lng": -117.9441904
            },
            "image_url": weddingCeremonyIcon,
            "direction_url": "https://goo.gl/maps/symiAFq8KkQ2"
        }, {
            "type": "reception",
            "formatted_address": "3350 Avenue of the Arts, Costa Mesa, CA 92626, USA",
            "place_id": "ChIJNVK_Hiff3IARlbeVYH8aywg",
            "name": "Avenue of the Arts Costa Mesa",
            "time": "5:00 PM Sunday, June 30, 2019",
            "location": {
                "lat": 33.691459,
                "lng": -117.8805782
            },
            "image_url": weddingReceptionIcon,
            "direction_url": "https://goo.gl/maps/oUmHZ3yKfPdAPudL8"
        }]
}, {
    "destination": "Vietnam",
    "center": {
        "lat": 10.8231,
        "lng": 106.6297
    },
    "eventDetail": [{
        "type": "reception",
        "formatted_address": "17 Lê Duẩn, Bến Nghé, Quận 1, Hồ Chí Minh 070000, Vietnam",
        "place_id": "ChIJpV-7MUovdTERS3tmu3Rt9kw",
        "name": "Sofitel Saigon Plaza",
        "time": "5:00 PM Sunday, June 23, 2019",

        "location": {
            "lat": 10.784207,
            "lng": 106.702673
        },
        "image_url": weddingReceptionIcon,
        "direction_url": "https://goo.gl/maps/Raq81WRxfVWm56Qq9"
    }]
}
]

export default class Events extends Component {
    renderEventDetail(destination) {
        for (let i = 0; i < eventsPlaces.length; i++) {
            if (eventsPlaces[i].destination === destination) {
                return eventsPlaces[i].eventDetail.map((place) => {
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
        }
    }

    passCenterPropsToMap(destination) {
        for (let i = 0; i < eventsPlaces.length; i++) {
            if (eventsPlaces[i].destination === destination) {
                return eventsPlaces[i].center;
            }
        }
    }

    passEventDetailPropsToMap(destination) {
        for (let i = 0; i < eventsPlaces.length; i++) {
            if (eventsPlaces[i].destination === destination) {
                return eventsPlaces[i].eventDetail;
            }
        }
    }

    render() {
        return <div className="container events-container">
            <h4 className="center">Events
                <br />
                <img className="flower-line" src={flowerLine} alt="" />
            </h4>
            <div className="container event-map-and-detail-container">
                <Map destination="USA" mapCenter={this.passCenterPropsToMap("USA")} eventDetail={this.passEventDetailPropsToMap("USA")} />
                <div className="event-detail-container">
                    {this.renderEventDetail("USA")}
                </div>
            </div>
            <div className="container event-map-and-detail-container">
                <Map destination="Vietnam" mapCenter={this.passCenterPropsToMap("Vietnam")} eventDetail={this.passEventDetailPropsToMap("Vietnam")} />
                <div className="event-detail-container">
                    {this.renderEventDetail("Vietnam")}
                </div>
            </div>
        </div>
    }
}   