  const initialState = {
    notes: []
  }

export default function (state = initialState, action) {
    switch(action.type){
      case "USER_LOGIN":
        return {...state, ...action.user}
      case "ADD_NOTE":
          return {...state, notes: [ ...state.notes, action.note]}
      case "LOG_OUT":
        return initialState
      default:
        return state
    }
}