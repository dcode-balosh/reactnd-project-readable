import React, {Component} from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="categories-header">Categories</h1>
                                <ul className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action"><i className="fa fa-home fa-fw"/>All</a>
                                    <a href="#" className="list-group-item list-group-item-action">Categorie-1</a>
                                    <a href="#" className="list-group-item list-group-item-action">Categorie-2</a>
                                    <a href="#" className="list-group-item list-group-item-action">Categorie-3</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="posts-header">Posts</h1>
                                <div className="text-right">
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-outline-primary">Score <i
                                            className="fa fa-sort-numeric-desc" aria-hidden="true"/></a>
                                        <a href="#" className="btn btn-outline-primary">Time <i
                                            className="fa fa-sort-numeric-desc" aria-hidden="true"/></a>
                                        <a href="#" className="btn btn-outline-primary">New <i className="fa fa-plus"
                                                                                               aria-hidden="true"/></a>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Post-1</a>
                                    <a href="#" className="list-group-item list-group-item-action">Post-2</a>
                                    <a href="#" className="list-group-item list-group-item-action">Post-n</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
