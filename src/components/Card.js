import React from "react";
import { connect } from "react-redux";
import { 
    Dimmer,
    Loader,
    Icon,
    Divider } from "semantic-ui-react";
import { selectMyNote, unselectNote } from "../actions/note";
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    border-radius: 15px;
    border: 1px solid rgb(182, 187, 189);
    padding: 20px;
    max-width: 270px;
    height: 500px;
    overflow: auto;
`

class Card extends React.Component {

    state = {
        loading: true
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.user.user.id && prevState.loading){
            this.setState({
                loading: false
            })
        }
    }

    handleSelect = (note) => {
        if(note.id === this.props.user.user.selected.id){
            this.props.unselectNote();
        } else {
        this.props.selectMyNote(note);
        this.setState({
            selected: note
        })}
    }

    renderNotes = () => {
        return this.props.user.user.notes.map(note => {
            if(note.position === this.props.position)
                return (
                    <div className="note" key={note.id} onClick={() => this.handleSelect(note)}>
                        {note.id === this.props.user.user.selected.id ?
                            <Icon name="circle" color="green"/>
                            :
                            <Icon name="circle outline" color="grey"/>
                        }
                        {note.content}
                       <Divider />
                    </div>
                )
        })
    }

    render(){
        if (this.state.loading){
            return (
            <div>
                <Dimmer active inverted>
                    <Loader size='big'>Loading</Loader>
                </Dimmer>
            </div>)
        }
        return(
            <Container>
                <h3 className="cardHeader">
                    <Icon name="pencil alternate" color="blue"/> {this.props.title} </h3>
                <Divider hidden />
                {this.renderNotes()}
            </Container>
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
        selectMyNote: note => dispatch(selectMyNote(note)),
        unselectNote: () => dispatch(unselectNote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);