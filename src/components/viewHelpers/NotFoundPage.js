import React from "react";
import ColMd12 from "./ColMd12";

function NotFoundPage(props) {
    if (props.condition) {
        return (<div>{props.children}</div>)
    }
    else {
        return (
            <ColMd12>
                <div className="text-center">
                    <h1>Page Not Found</h1>
                    <p>Sorry, there is nothing to see here.</p>
                </div>
            </ColMd12>
        )
    }
}

export default NotFoundPage;
