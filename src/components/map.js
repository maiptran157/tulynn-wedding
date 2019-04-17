import '../assets/css/map.css';
import weddingCeremonyIcon from '../assets/images/wedding_ceremony_icon.png';
import weddingReceptionIcon from '../assets/images/wedding_reception_icon.png';
import React, { Component, Fragment } from 'react';
import apiKey from '../config/api_key';
import GoogleMapReact from 'google-map-react';

const eventsPlaces = [{
    "type": "wedding ceremony",
    "formatted_address": "10801 Stanford Ave, Garden Grove, CA 92840, USA",
    "location": {
        "lat": 33.778022,
        "lng": -117.9441904
    },
    "place_id": "ChIJw41_cgwo3YARgwYIPupA1Mk",
    "name": "Saint Columban Catholic Church",
    "image_url": weddingCeremonyIcon,
}, {
    "type": "reception",
    "formatted_address": "3350 Avenue of the Arts, Costa Mesa, CA 92626, USA",
    "location": {
        "lat": 33.691459,
        "lng": -117.8805782
    },
    "place_id": "ChIJNVK_Hiff3IARlbeVYH8aywg",
    "name": "Avenue of the Arts Costa Mesa",
    "image_url": weddingReceptionIcon,
}
]

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.location.lat,
            place.location.lng,
        ));
    });
    return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
};

const showInfoBox = (id) => {
    if (document.getElementById(id)) {
        document.getElementById(id).style.display = "inline-block";
    }
}

const Marker = ({ image_url, place_id, type, name, formatted_address }) => {
    return <Fragment>
        <div className="marker">
            <img src={image_url} datatarget={place_id} onClick={showInfoBox(place_id)} alt="" />
        </div>
        <div id={place_id}>
            <div className="arrow-up"></div>
            <p className="info-box">
                <span>{type}</span>
                <br />
                {name}
                <br />
                {formatted_address}
            </p>
        </div>
    </Fragment>
};

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 33.7743,
            lng: 117.9380
        },
        zoom: 11
    };

    renderMarker() {
        return eventsPlaces.map((place) => {
            return <Marker
                key={place.place_id}
                place_id={place.place_id}
                lat={place.location.lat}
                lng={place.location.lng}
                type={place.type}
                name={place.name}
                formatted_address={place.formatted_address}
                image_url={place.image_url}
            />
        })
    }

    render() {
        return (
            <div className="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey.GOOGLE_PLACES_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, eventsPlaces)}
                >
                    {this.renderMarker()}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;