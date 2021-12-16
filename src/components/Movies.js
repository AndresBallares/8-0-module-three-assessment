import React from "react";

class Movies extends React.Component {
    constructor() {
        super();

        this.state = ({
            films: [],
        })
    }

    moviesFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => response.json())
        .then((movieData) => {
            console.log(movieData)
            this.setState({
                films: movieData,
            }) 
        });
    }

    componentDidMount = () => {
        this.moviesFetch()
    }

    


    render() {
        const { films } = this.state

        let dropDownOptions = films.map((film) => {
            return <option>{film.title}</option>
        });
        
        return (
            <div className=".movies">
                <h1>Select a Movie</h1>
                <select>
                    <option></option>
                    {dropDownOptions}
                </select>

            </div>
        )
    }
}

export default Movies;