import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addNote } from "../actions/note";

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
        console.log("state", this.state)
        this.setState({
            content: ''
        })
    }

    render(){
        console.log(this.props.user.user.id)
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
                    <Button size="tiny">Add</Button>
                    </Form.Group>
                </Form>
                <Button>Move Forward</Button>
                <Button>Move Backward</Button>
                <Button>Delete</Button>
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