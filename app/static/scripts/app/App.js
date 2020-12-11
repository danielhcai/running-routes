import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import RouteMap from './RouteMap'
import './style.css'

function App() {
	const [collapsed, setCollapsed] = useState(false)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect (() => {
		setWidth(window.innerWidth)
		setWidth(window.innerHeight)
	})
	
	return (
		<div className="container-fluid">
			<div className="row">
				<RouteMap />
			</div>
		</div>
	);
}

export default App