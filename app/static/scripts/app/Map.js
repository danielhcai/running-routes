import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    render() {
        return (
            <div style={{ height: '500px', width: '500px' }}>
                <GoogleMapReact
                bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}
 
export default Map;
