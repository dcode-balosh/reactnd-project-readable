import React, {Component} from "react";
// ######################################## router start
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "./App.css";
import ColMd12 from "./components/ColMd12";
import CategoriesContainer from "./containers/CategoriesContainer";
import PostsContainer from "./containers/PostsContainer";
import PostContainer from "./containers/PostContainer";
import NewPost from "./components/NewPost";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={({location}) =>
                            <div className="App">
                                <div className="page-header text-center"><h1>Readable</h1></div>
                                <ColMd12><CategoriesContainer location={location}/></ColMd12>
                                <ColMd12><PostsContainer location={location}/></ColMd12>
                            </div>
                        }/>
                        <Route exact path="/categories/:category" render={({location, match}) =>
                            <div className="App">
                                <div className="page-header text-center"><h1>{match.params.category}</h1></div>
                                <ColMd12><CategoriesContainer location={location}/></ColMd12>
                                <ColMd12><PostsContainer location={location}
                                                         category={match.params.category}/></ColMd12>
                            </div>
                        }/>
                        <Route exact path="/posts/new" render={({location,match}) =>
                            <div className="App">
                                <NewPost/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId" render={({location,match}) =>
                            <div className="App">
                                <PostContainer location={location}
                                                       postId={match.params.postId}
                                />
                            </div>
                        }/>



                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
