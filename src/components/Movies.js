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
            return <option>{film.title}</option>
        });

        let infToDisplay = this.state.films.find((film) => {
            return this.state.films.title === this.state.filmDetails
            
        })

        
        // <section>
        //     <p>Title: {film.title}</p>
        //     <p>Release Date: {films.release_date}</p>
        //     <p>Description: {films.description}</p>
        // </section>
        

        return (
            <div className=".movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleOnChange}>
                    <option></option>
                    {dropDownOptions}
                </select>
                <span>{infToDisplay ? 
                `Title: {this.state.films.title}
                Release Date: {films.release_date}
                Description: {films.description}`
                : null}</span> 
        
            </div>
        )
    }
}

export default Movies;