import React from 'react'

function Marker(props) {
    const DIAMETER = props.dia
    const markerStyle = {
        position: 'absolute',
        width: DIAMETER,
        height: DIAMETER,
        left: -DIAMETER / 2,
        top: -DIAMETER / 2,
    
        borderRadius: DIAMETER,
        backgroundColor: '#111111',
        padding: 4
    };

	return (
        <div style = {markerStyle}></div>
	)
}

export default Marker
