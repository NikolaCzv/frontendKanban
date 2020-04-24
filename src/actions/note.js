const newNote = note => {
    return{
        type: "ADD_NOTE",
        note
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