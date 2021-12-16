import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  render(){
    
    return (
      <div className="app">
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/movies" component={Movies} />
            <Route path="/people" component={People} />
            <Route path="/locations" component={Locations} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;