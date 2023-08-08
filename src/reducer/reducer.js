export default function reducer(state, action) {
  if (action.type === "add_count") {
    return {
      count: state.count + 1,
    };
  }
}
