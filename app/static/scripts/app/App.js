import React from 'react'
import Sidebar from './Sidebar.js'
import RouteMap from './RouteMap'
import './style.css'

class App extends React.Component {
	render() {
		return (
			<div>
				<Sidebar />
				<RouteMap />
			</div>
		);
	}
}

export default App