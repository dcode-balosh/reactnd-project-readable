import React, {Component} from "react";
import postSchema from "../schemas/post.js"

class FormPost extends Component {
    constructor(props) {
        super(props);
        let schema = () => null;
        switch (props.modal) {
            case 'posts':
                schema = postSchema;
                break;
        }

        this.state = {
            onNewPostSubmit: props.onNewPostSubmit,
            data: props.data,
            schema
        };
    }

    form_render(onNewPostSubmit,data,schema) {
        if(window.$("#form")){
            window.$("#form").empty();
        }
        window.$("#form").alpaca({
            "schema": schema(),
            "data": data,
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
        this.form_render(this.state.onNewPostSubmit,this.state.data,this.state.schema);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.onNewPostSubmit !== this.state.onNewPostSubmit){
            this.setState({onNewPostSubmit: nextProps.onNewPostSubmit})
        }
        if(nextProps.data !== this.state.data){
            this.setState({data: nextProps.data})
        }
        if(nextProps.modal !== this.state.modal){
            this.setState({modal: nextProps.modal})
        }
    }

    componentDidUpdate(){
        this.form_render(this.state.onNewPostSubmit,this.state.data,this.state.schema);
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
