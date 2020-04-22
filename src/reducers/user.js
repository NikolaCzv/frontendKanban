  const initialState = {
}

export default function (state = initialState, action) {
    switch(action.type){
      case "USER_LOGIN":
        return {...state, ...action.user}
      case "LOG_OUT":
        return initialState
      default:
        return state
    }
}