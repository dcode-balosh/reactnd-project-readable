import React, {Component} from "react";
import schema from "../schemas/post.js"

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onNewPostSubmit: props.onNewPostSubmit,
            post: props.post
        };
    }

    form_render(onNewPostSubmit,post) {
        window.$("#form").alpaca({
            "schema": schema(),
            "data": post,
            "options": {
                "form": {
                    "buttons": {
                        "submit": {
                            "title": "Send Form Data",
                            "click": function () {
                                let val = this.getValue();
                                if (this.isValid(true)) {
                                    onNewPostSubmit(val);
                                } else {
                                    alert("Invalid value: " + JSON.stringify(val, null, "  "));
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    componentDidMount() {
        this.form_render(this.state.onNewPostSubmit,this.state.post);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.onNewPostSubmit !== this.state.onNewPostSubmit){
            this.setState({onNewPostSubmit: nextProps.onNewPostSubmit})
        }
        if(nextProps.post !== this.state.post){
            this.setState({post: nextProps.post})
        }
    }

    render() {
        return (
            <div className="posts-component">
                <div id="form"><span/></div>
            </div>
        )
    }
}

export default FormPost;
