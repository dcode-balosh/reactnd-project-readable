import {connect} from "react-redux";
import Form from "../components/Form";


function mapStateToProps(state,ownProps) {
    return {
        data: state[ownProps.modal][ownProps.modalId],
        location: ownProps.location
    }
}

let FormContainer = connect(mapStateToProps)(Form);

export default FormContainer;
