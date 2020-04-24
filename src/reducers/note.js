const initialState = {
    
}

export default function (state = initialState, action) {
  switch(action.type){
      case "ADD_NOTE":
          return {...state, ...action.note}
    default:
      return state
  }
}