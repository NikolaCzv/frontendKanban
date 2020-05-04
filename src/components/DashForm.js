import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addNote, deleteNote } from "../actions/note";

class DashForm extends React.Component{

    state = {
        content: '',
        user_id: this.props.user.user.id,
        position: 1
    }

    componentDidUpdate(prevProps, prevState){
        if(!prevProps.user.user.id && this.props.user.user.id){
            this.setState({
                user_id: this.props.user.user.id
            })
        }
    }

    handleInput = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addNote(this.state)

        this.setState({
            content: ''
        })
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.user.user.selected)
    }

    render(){
        return(
            <div className="dashForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="5">
                    <Form.Input 
                    fluid
                    placeholder='Add Task Here...'
                    name="add"
                    onChange={this.handleInput}
                    value={this.state.content}/>
                    {
                    this.state.content === '' ? 
                        <Button disabled size="tiny" color="green">Add</Button>
                        :
                        <Button size="tiny" color="green">Add</Button>
                    }
                    </Form.Group>
                </Form>
                <Button color="twitter" size="tiny">Move Forward</Button>
                <Button color="twitter" size="tiny">Move Backward</Button>
                {
                    this.props.user.user.selected.id ? 
                    <Button color="red" size="tiny" onClick={this.handleDelete}>Delete</Button>
                        :
                    <Button color="red" size="tiny" disabled>Delete</Button>
                }
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
        addNote: note => dispatch(addNote(note)),
        deleteNote: note => dispatch(deleteNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashForm);