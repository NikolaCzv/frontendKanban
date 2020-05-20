const newNote = note => {
    return{
        type: "ADD_NOTE",
        note
    }
}

const selectedNote = note => {
    return {
        type: "SELECT_NOTE",
        note
    }
}

const removeNote = note => {
    return {
        type: "DELETE_NOTE",
        note: note.id
    }
}

export const unselectNote = () => {
    return {
        type: 'UNSELECT_NOTE'
    }
} 

const moveNoteForward = note => {
    return {
        type: "MOVE_FORWARD",
        note: note
    }
}

const moveNoteBackward = note => {
    return {
        type: "MOVE_BACKWARD",
        note: note
    }
}

export const addNote = note => {
    return function(dispatch){
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        }

        fetch("https://dry-fjord-90208.herokuapp.com/api/v1/notes", reqObj)
        .then(resp => resp.json())
        .then(data => {
            dispatch(newNote(data));
        })
    }
}

export const selectMyNote = note => {
    return function(dispatch){
        dispatch(selectedNote(note))
    }
} 

export const deleteNote = note => {
    return function(dispatch){
        fetch(`https://dry-fjord-90208.herokuapp.com/api/v1/notes/${note.id}`, { method: "DELETE" })
        .then(resp => resp.json())
        .then(data => dispatch(removeNote(data)));
    }
}

export const moveForward = note => {
    return function(dispatch){

        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: note.content,
                user_id: note.user_id,
                position: note.position + 1
            })
        }

        fetch(`https://dry-fjord-90208.herokuapp.com/api/v1/notes/${note.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.position >= 1 && data.position <= 5){
            dispatch(moveNoteForward(data));
            } else {
                alert("Something Went Wrong!");
            }
        })
    }
}

export const moveBackward = note => {
    return function(dispatch){

        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: note.content,
                user_id: note.user_id,
                position: note.position - 1
            })
        }

        fetch(`https://dry-fjord-90208.herokuapp.com/api/v1/notes/${note.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.position >= 1 && data.position <= 5){
            dispatch(moveNoteBackward(data));
            } else {
                alert("Something Went Wrong!");
            }
        })
    }
}