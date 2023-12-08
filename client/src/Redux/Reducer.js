import { GET_CHARACTERS } from "./Actions";

const initialState = {
    characters: [],
    contador: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHARACTERS:
        return {
          ...state,
          characters: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  