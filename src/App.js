import React, {Component} from "react";
import "./App.css";
import Category from './components/Categories'
import Posts from './components/Posts'
import ColMd12 from './components/ColMd12'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ColMd12><Category/></ColMd12>
                <ColMd12><Posts/></ColMd12>
            </div>
        );
    }
}

export default App;
