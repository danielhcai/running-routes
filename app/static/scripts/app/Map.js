import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from'./Marker.js'

const center = {lat: 29.7604, lng: -95.3698}
const zoom = 11

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markerCoordinates: [],
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick (event) {
        if(this.props.mode == 1){
            this.setState(function(state, props) {
                let oldCoordinates = state.markerCoordinates
                oldCoordinates.push({lat: event.lat, lng: event.lng})
                return {
                    markerCoordinates: oldCoordinates,
                }
            })
        }
    }

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
                zoom={this.state.zoom}
                onClick={this.handleClick}
                onChange={this.handleChange}
            >
                {this.state.markerCoordinates.map(coordinates => 
                    <Marker lat={coordinates.lat} lng={coordinates.lng} dia={5}/>
                )}
            </GoogleMapReact>
        )
    }
}
 
export default Map;
