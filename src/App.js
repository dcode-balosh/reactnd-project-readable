import React, {Component} from "react";
// ######################################## router start
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import ColMd12 from "./components/viewHelpers/ColMd12";
import CategoriesContainer from "./containers/CategoriesContainer";
import PostsContainer from "./containers/PostsContainer";
import PostContainer from "./containers/PostContainer";
import FormContainer from "./containers/FormContainer";
import {init} from "./actions/index";
import * as Api from './Api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatch: props.dispatch
        };
    }

    componentDidMount() {
        this.state.dispatch(init());
        Api.updatePostsState(this.state.dispatch);
        Api.updateCommentsState(this.state.dispatch)
    }

    onNewPostSubmit(history,{title,body,author,category}) {
        Api.newPost(this.state.dispatch,title,body,author,category);
        history.push('/')
    }
    onEditPostSubmit(history,postId,{title,body}) {
        Api.updatePost(this.state.dispatch,postId,title,body);
        history.push(`/posts/${postId}`)

    }
    onNewCommentsSubmit(history,parentId,{body,author}) {
        Api.newComment(this.state.dispatch,body,author,parentId);
        history.push(`/posts/${parentId}`);
    }

    onEditCommentsSubmit(history,parentId,id,{body}) {
        Api.updateComment(this.state.dispatch,id,body);
        history.push(`/posts/${parentId}`);
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
                        <Route exact path="/posts/new" render={({history,location, match}) =>
                            <div className="App">
                                <FormContainer modal='posts'
                                               onNewPostSubmit={this.onNewPostSubmit.bind(this,history)}/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId/edit" render={({history,location, match}) =>
                            <div className="App">
                                <FormContainer modal='posts'
                                    onNewPostSubmit={this.onEditPostSubmit.bind(this,history,match.params.postId)}
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
                        <Route exact path="/posts/:postId/comments/:commentId/edit" render={({history,location, match}) =>
                            <div className="App">
                                <FormContainer modal='comments'
                                               onNewPostSubmit={this.onEditCommentsSubmit.bind(this,history,match.params.postId,match.params.commentId)}
                                               modalId={match.params.commentId}/>
                            </div>
                        }/>
                        <Route exact path="/posts/:postId/comments/new" render={({history,location, match}) =>
                            <div className="App">
                                <FormContainer modal='comments'
                                               onNewPostSubmit={this.onNewCommentsSubmit.bind(this,history,match.params.postId)}
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
