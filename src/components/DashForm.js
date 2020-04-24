import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addNote } from "../actions/note";

class DashForm extends React.Component{

    state = {
        content: '',
        user_id: this.props.user.user.id
    }

    handleInput = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addNote(this.state)
    }

    render(){
        return(
            <div className="dashForm">
                <Form onSubmit={this.handleSubmit}>
                    <h4>Add Tasks</h4>
                    <Form.Group widths="5">
                    <Form.Input 
                    fluid
                    placeholder='Add Task Here...'
                    name="add"
                    onChange={this.handleInput}/>
                    <Button size="tiny">Add</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: note => dispatch(addNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashForm);