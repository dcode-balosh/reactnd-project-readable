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
import AppHeader from "./components/Header";
import NotFoundPage from "./components/viewHelpers/NotFoundPage";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(init());
        Api.updatePostsState(this.props.dispatch);
        Api.updateCommentsState(this.props.dispatch)
    }

    onNewPostSubmit(history,{title,body,author,category}) {
        Api.newPost(this.props.dispatch,title,body,author,category);
        history.push('/')
    }
    onEditPostSubmit(history,category,postId,{title,body}) {
        Api.updatePost(this.props.dispatch,postId,title,body);
        history.push(`/${category}/${postId}`)

    }
    onNewCommentsSubmit(history,category,parentId,{body,author}) {
        Api.newComment(this.props.dispatch,body,author,parentId);
        history.push(`/${category}/${parentId}`);
    }

    onEditCommentsSubmit(history,category,parentId,id,{body}) {
        Api.updateComment(this.props.dispatch,id,body);
        history.push(`/${category}/${parentId}`);
    }



    render() {
        let categories = this.props.categories;
        let posts = this.props.posts;
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={({location}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <div className="page-header text-center"><h1>Readable</h1></div>
                                <ColMd12><CategoriesContainer location={location}/></ColMd12>
                                <ColMd12><PostsContainer location={location}/></ColMd12>
                            </div>
                        }/>
                        <Route exact path="/categories/:category" render={({location, match}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <NotFoundPage condition={this.categoryExists(match, categories)}>
                                    <div className="page-header text-center"><h1>{match.params.category}</h1></div>
                                    <ColMd12><CategoriesContainer location={location}/></ColMd12>
                                    <ColMd12><PostsContainer location={location}
                                                             category={match.params.category}/></ColMd12>
                                </NotFoundPage></div>
                        }/>
                        <Route exact path="/posts/new" render={({history,location, match}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <FormContainer modal='posts'
                                               onNewPostSubmit={this.onNewPostSubmit.bind(this,history)}/>
                            </div>
                        }/>
                        <Route exact path="/:category/:postId/edit" render={({history,location, match}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <NotFoundPage condition={ this.postIdExists(match, posts) && this.categoryExists(match, categories) }>
                                    <FormContainer modal='posts'
                                                   onNewPostSubmit={this.onEditPostSubmit.bind(this, history,
                                                       match.params.category,
                                                       match.params.postId)}
                                                   modalId={match.params.postId}/>
                                </NotFoundPage>
                            </div>
                        }/>
                        <Route exact path="/:category/:postId" render={({location, match}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <NotFoundPage condition={this.postIdExists(match, posts) && this.categoryExists(match, categories)}>
                                    <PostContainer location={location}
                                                   postId={match.params.postId}
                                    />
                                </NotFoundPage>
                            </div>
                        }/>
                        <Route exact path="/:category/:postId/comments/:commentId/edit"
                               render={({history, location, match}) =>
                                   <div className="App">
                                       <ColMd12><AppHeader/></ColMd12>
                                       <NotFoundPage condition={this.postIdExists(match, posts) && this.categoryExists(match, categories)}>
                                       <FormContainer modal='comments'
                                                      onNewPostSubmit={this.onEditCommentsSubmit.bind(this, history,
                                                          match.params.category,
                                                          match.params.postId,
                                                          match.params.commentId)}
                                                      modalId={match.params.commentId}/>
                                       </NotFoundPage>
                                   </div>
                               }/>
                        <Route exact path="/:category/:postId/comments/new" render={({history, location, match}) =>
                            <div className="App">
                                <ColMd12><AppHeader/></ColMd12>
                                <NotFoundPage condition={this.postIdExists(match, posts) && this.categoryExists(match, categories)}>
                                    <FormContainer modal='comments'
                                                   onNewPostSubmit={this.onNewCommentsSubmit.bind(this, history,
                                                       match.params.category,
                                                       match.params.postId)}
                                    />
                                </NotFoundPage>
                            </div>
                        }/>


                    </Switch>
                </div>
            </Router>
        );
    }

    categoryExists(match, categories) {
        return categories.map((x) => x.path).includes(match.params.category);
    }

    postIdExists(match, posts) {
        return posts[match.params.postId];
    }
}

export default App;
