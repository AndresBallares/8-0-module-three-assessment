import React from 'react';
import Movies from './Movies';
import People from './People';
import Locations from './Locations';
import { Link } from "react-router-dom";

class NavBar extends React.Component {




    render(){
        return (
            <nav className="Navbar">
                <Link to="/">
                    <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=700&format=jpeg&auto=webp"
                alt="dog"
                className="dog-logo"
                width="50px"
                height="50px"
                />
                </Link>
                <Link to="/movies">Movies</Link> 
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>

            </nav>
        )
    }
}

export default NavBar;