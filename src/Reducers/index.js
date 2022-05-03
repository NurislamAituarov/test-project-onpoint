const initialState = {
  count: null,
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
}
