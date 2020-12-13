import React from 'react'

function Navbar(props) {
	return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Running Routes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                        <input type="radio" name="options" value={0} autocomplete="off" onClick={props.changeMode} checked /> Select
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="options" value={1} autocomplete="off" onClick={props.changeMode} /> Marker
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="options" value={2} autocomplete="off" onClick={props.changeMode} /> Edge
                    </label>
                </div>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
	)
}

export default Navbar