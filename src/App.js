import React, {Component} from "react";
// ######################################## router start
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import ColMd12 from "./components/ColMd12";
import CategoriesContainer from "./containers/CategoriesContainer";
import PostsContainer from "./containers/PostsContainer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={({location}) =>
                        <div className="App">
                            <ColMd12><CategoriesContainer/></ColMd12>
                            <ColMd12><PostsContainer location={location} /></ColMd12>
                        </div>
                    }/>
                    <Route path="/posts" render={() =>
                        <span>#TBD new post view</span>
                    }/>
                </div>
            </Router>
        );
    }
}

export default App;
