const initialState = {
  city: 'Zagreb'
}

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case 'cityTyped': {
      const { city } = action.payload;  
      return city;
    }
    default:
      return state.city;
  }
}
