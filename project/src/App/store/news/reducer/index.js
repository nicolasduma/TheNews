const reducer = (state = [10], action) => {
  switch (action.type) {
    case 'GET':
      return state
    default:
      return state
  }
}

export default reducer
