const initialState = {
  tasks: {}
}

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_DONE':
      return {
        tasks: state.tasks
      }

    default:
      return state
  }
}

export default initialReducer