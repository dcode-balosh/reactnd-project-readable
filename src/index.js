import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "alpaca/dist/alpaca/bootstrap/alpaca.css"
// ################################## end
// ################################## Redux
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";
// ################################## end
import {init} from "./actions/index";

// ################################## Bootstrap js
window.jQuery = window.$ = require('jquery/dist/jquery.js');

window.Popper = require('popper.js/dist/popper.js');

require('bootstrap/dist/js/bootstrap.js');

require('alpaca/dist/alpaca/bootstrap/alpaca.js');
// ################################## end


const store = createStore(
    rootReducer,
    {
        categories: [],
        posts: [],
        comments: []
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();

store.dispatch(init());

