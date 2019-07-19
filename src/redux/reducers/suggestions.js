const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case "findSuggestions": {
      return [
        {
          id: 1,
          title: ""
        }
      ];
    }
    default:
      return state;
  }
}

export default reducer;
