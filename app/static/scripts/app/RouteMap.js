import React from 'react'
import Map from './Map'

const center = {lat: 59.95, lng: 30.33}
const zoom = 11

function RouteMap() {
	return (
		<div className="route-map">
			<Map center={center} zoom={zoom}/>
		</div>
	)
}

export default RouteMap
