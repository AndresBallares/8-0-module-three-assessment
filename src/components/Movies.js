import React from "react";

class Movies extends React.Component {
    constructor() {
        super();

        this.state = ({
            films: [],
            filmDetails: null
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

    handleOnChange = (event) => {
        this.setState({
            filmDetails: event.target.value,    
        })
    }




    render() {
        const { films, filmDetails } = this.state

        let dropDownOptions = films.map((film) => {
            return <option key={film.id}>{film.title}</option>
        });

        let infToDisplay = this.state.films.find((film) => {
            return film.title === this.state.filmDetails
            
        })
        console.log(infToDisplay)
        
    
        

        return (
            <div className=".movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleOnChange}>
                    <option></option>
                    {dropDownOptions}
                </select>
                <>
                {infToDisplay ?  
                (<>
                <p>Title: {infToDisplay.title}</p>
                <p>Release Date: {infToDisplay.release_date}</p>
                <p>Description: {infToDisplay.description}</p>
                </>)
            
                : null}
                </> 
        
            </div>
        )
    }
}

export default Movies;