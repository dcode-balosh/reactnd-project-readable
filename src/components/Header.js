import React from "react";
import {NavLink} from "react-router-dom";

function AppHeader(props) {
    return (
        <div className="Header-component">

            <NavLink exact to='/'
                     isActive={() => false}
                     className="list-group-item list-group-item-action">
                <i className="fa fa-home fa-fw"/>
            </NavLink>
        </div>
    )
}

export default AppHeader;
