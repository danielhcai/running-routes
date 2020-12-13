import React, {useState, useEffect, Component} from 'react'
import Navbar from './Navbar.js'
import Map from './Map.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mode: 0
		}

		this.changeMode = this.changeMode.bind(this)
	}
	
	changeMode(event) {
		this.setState({
			mode: parseInt(event.target.attributes[3].value)
		})
	}

	render(){
		return (
			<div id="map-container">
				<Navbar changeMode={this.changeMode}/>
				<Map mode={this.state.mode}/>
			</div>
		)
	}
}

export default App