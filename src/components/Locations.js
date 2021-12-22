import React from "react";


class Locations extends React.Component {
    constructor() {
        super();
        this.state = ({
            areLocationsShown: false,
            locations: [],
        })
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((response) => response.json())
        .then((locations) => this.setState({ locations: locations}))
    }

    toggleShowLocations = ()=> {
        const { areLocationsShown } = this.state;
        this.setState({ areLocationsShown: !areLocationsShown});
    }


    render() {
        const { locations, areLocationsShown } = this.state
        const locationItems = locations.map((location) => {
            const {name, climate, terrain, id} = location;
            return 
            <li key={location.id}>
                <h3>{name}</h3>
                <p>{climate}</p>
                <p>{terrain}</p>
            </li>
        })

        return (
            <div>
                <button onClick={this.toggleShowLocations}>{areLocationsShown ? "Hide Locations" : "Show Locations"}</button>
                <h3>List of Locations</h3>
                <ul>{areLocationsShown && locationItems}</ul>
            </div>
        )
    }
}

export default Locations;