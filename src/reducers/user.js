  const initialState = {
}

export default function (state = initialState, action) {
    switch(action.type){
      case "USER_LOGIN":
        return {...state, ...action.user}
      default:
        return state
    }
}