import React, {Component} from "react";
import "./App.css";
import ColMd12 from './components/ColMd12';
import Init from './containers/init';
import CategoriesContainer from './containers/CategoriesContainer';
import PostsContainer from './containers/PostsContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Init/>
                <ColMd12><CategoriesContainer/></ColMd12>
                <ColMd12><PostsContainer/></ColMd12>
            </div>
        );
    }
}

export default App;
