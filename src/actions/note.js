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

export const addNote = note => {
    return function(dispatch){
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        }

        fetch("http://localhost:3000/api/v1/notes", reqObj)
        .then(resp => resp.json())
        .then(data => {
            dispatch(newNote(data))
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
        fetch(`http://localhost:3000/api/v1/notes/${note.id}`, { method: "DELETE" })
        .then(resp => resp.json())
        .then(data => dispatch(removeNote(data)))
    }
}