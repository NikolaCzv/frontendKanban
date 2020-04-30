import React from "react";
import { connect } from "react-redux";
import { Dimmer, Loader, Icon, Divider } from "semantic-ui-react";

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

    renderNotes = () => {
        return this.props.user.user.notes.map(note => {
            if(note.position === this.props.position)
                return (
                    <div className="note" key={note.id}>
                       <Icon name="check square outline" color="grey"/> {note.content}
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
            <div className="card">
                <h3 className="cardHeader">
                    <Icon name="pencil alternate" color="blue"/> {this.props.title} </h3>
                <Divider hidden />
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(Card);