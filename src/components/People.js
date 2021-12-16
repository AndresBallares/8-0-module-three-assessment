import React from "react";


class People extends React.Component {
    constructor() {
        super();

        this.state = ({
            people: [],
            userInput: "",

        })
    }

    handleSearch = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            this.setState({ people: data })
        })
    }

    componentDidMount = () => {
        this.handleSearch()
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    }



    render() {
        const { people, userInput } = this.state

        let displayInf = this.state.people.find((person) => {
            return this.state.people.name === this.state.userInput
        })

        return (
            <div className=".people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Find Your Person"
                    value={userInput}
                    onChange={this.handleUserInput}
                    />
                    <button onClick={this.handleSearch} type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default People;