function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        state,
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        state,
        count: state.count - 1,
      };
    }
    default: {
      console.error(`action of type ${action.type} not supported`);
      return state;
    }
  }
}

export default reducer;
