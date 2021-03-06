import '../assets/css/map.css';
import React, { Component, Fragment } from 'react';
import apiKey from '../config/api_key';
import GoogleMapReact from 'google-map-react';

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

class MapContainer extends Component {
    static defaultProps = {
        zoom: 11
    };

    renderMarker() {
        return this.props.eventDetail.map((place) => {
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

    renderMap() {
        return <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey.GOOGLE_PLACES_API_KEY }}
            defaultCenter={this.props.mapCenter}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, this.props.eventDetail)}
        >
            {this.renderMarker()}
        </GoogleMapReact>
    }

    render() {
        return (
            <div className="map-container">
                {this.renderMap()}
            </div>
        );
    }
}

export default MapContainer;