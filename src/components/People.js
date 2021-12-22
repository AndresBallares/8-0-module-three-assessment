import React from "react";


class People extends React.Component {
    constructor() {
        super();

        this.state = ({
            people: [],
            userInput: "",
            

        })
    }

    componentDidMount = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((response) => response.json())
        .then((data) => {

            this.setState({ people: data })
        })
    }
    
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {userInput, people, person} = this.state

        this.setState({userInput: ""})

    }
    
    handleUserInput = (event) => {
        const { person, userInput } = this.state
        this.setState({
            userInput: event.target.value,
        })
 
        
    }
    
    
    render() {
        const { people, userInput, person } = this.state
        let displayInf = this.state.people.find((person) => {
            return person.name === this.state.userInput
        })
        console.log(this.state.person)

    

        return (
            <div className=".people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Find Your Person"
                    value={userInput}
                    onChange={this.handleUserInput}
                    name="person"
                    />
                    <button onClick={this.componentDidMount} type="submit">Submit</button> 
                    {displayInf ? (
                    <div>
                        <h3>{displayInf.name}</h3>
                        <p>{displayInf.age}</p>
                        <p>{displayInf.gender}</p>
                    </div>): <p>Not Found</p>}
                </form>

            </div>
        )
    }
}

export default People;