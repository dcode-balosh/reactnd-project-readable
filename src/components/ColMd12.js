import React, {Component} from "react";
class ColMd12 extends Component {
    render() {
        return (
            <div className="col-md-12-component">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>        )
    }
}
export default ColMd12;
