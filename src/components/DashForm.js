import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addNote, deleteNote, moveForward, moveBackward } from "../actions/note";

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

    handleForward = () => {
        this.props.moveForward(this.props.user.user.selected)
    }

    handleBackward = () => {
        this.props.moveBackward(this.props.user.user.selected)
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
                { this.props.user.user.selected.position >= 2 && this.props.user.user.selected.position <= 5 ?
                    <Button
                        color="twitter"
                        size="tiny"
                        onClick={this.handleBackward}>Move Backward</Button>
                    :
                    <Button
                        color="twitter"
                        size="tiny"
                        disabled>Move Backward</Button>
                }
                { this.props.user.user.selected.position >= 1 && this.props.user.user.selected.position < 5 ?
                    <Button
                        color="twitter"
                        size="tiny"
                        onClick={this.handleForward}>Move Forward</Button>
                        :
                    <Button
                        color="twitter"
                        size="tiny"
                        disabled>Move Forward</Button>
                }
                { this.props.user.user.selected.id ? 
                    <Button
                        color="red"
                        size="tiny"
                        onClick={this.handleDelete}>Delete</Button>
                        :
                    <Button
                        color="red"
                        size="tiny"
                        disabled>Delete</Button>
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
        deleteNote: note => dispatch(deleteNote(note)),
        moveForward: note => dispatch(moveForward(note)),
        moveBackward: note => dispatch(moveBackward(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashForm);