import React, {Component} from "react";
// ######################################## router start
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import ColMd12 from "./components/ColMd12";
import CategoriesContainer from "./containers/CategoriesContainer";
import PostsContainer from "./containers/PostsContainer";
import PostContainer from "./containers/PostContainer";
import FormContainer from "./containers/FormContainer";
import {init} from "./actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatch: props.dispatch
        };
    }

    componentDidMount() {
        this.state.dispatch(init());
    }

    onNewPostSubmit(data) {
        alert(`Submitted with:\n${JSON.stringify(data)}`)
    }

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
                        <Route exact path="/posts/new" render={({location, match}) =>
                            <div className="App">
                                <FormContainer modal='posts'
                                               onNewPostSubmit={this.onNewPostSubmit}/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId/edit" render={({location, match}) =>
                            <div className="App">
                                <FormContainer modal='posts'
                                    onNewPostSubmit={this.onNewPostSubmit}
                                                   modalId={match.params.postId}/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId" render={({location, match}) =>
                            <div className="App">
                                <PostContainer location={location}
                                               postId={match.params.postId}
                                />
                            </div>
                        }/>
                        <Route exact path="/posts/:postId/comments/:commentId/edit" render={({location, match}) =>
                            <div className="App">
                                <FormContainer modal='comments'
                                               onNewPostSubmit={this.onNewPostSubmit}
                                               modalId={match.params.commentId}/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId/comments/new" render={({location, match}) =>
                            <div className="App">
                                <FormContainer modal='comments'
                                               onNewPostSubmit={this.onNewPostSubmit}/>
                            </div>
                        }/>


                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
