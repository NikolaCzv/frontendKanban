  const initialState = {
    notes: [],
    selected: {}
  }

export default function (state = initialState, action) {
    switch(action.type){
      case "USER_LOGIN":
        return {...state, ...action.user}
      case "ADD_NOTE":
          return {...state, notes: [...state.notes, action.note]}
      case "SELECT_NOTE":
        return {...state, selected: action.note}
        case "UNSELECT_NOTE":
          return {...state, selected: {} }
      case 'DELETE_NOTE': 
        return {...state, notes: state.notes.filter(note => note.id !== action.note), selected: {}}
      case "MOVE_FORWARD":
        const myNoteForward = state.notes.find(note => note.id === action.note.id)
        return {...state, selected: action.note, notes: [...state.notes, myNoteForward.position++]}
      case "MOVE_BACKWARD":
        const myNoteBack = state.notes.find(note => note.id === action.note.id)
        return {...state, selected: action.note, notes: [...state.notes, myNoteBack.position--]}
      case "LOG_OUT":
        return initialState
      default:
        return state
    }
}