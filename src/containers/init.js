import React from "react";
import {connect} from "react-redux";
import {init} from "../actions/index";

let Init = ({dispatch}) => {
    return (
        <div>
            <button onClick={() => dispatch(init())}>
                Init
            </button>
        </div>
    )
};
Init = connect()(Init);

export default Init
