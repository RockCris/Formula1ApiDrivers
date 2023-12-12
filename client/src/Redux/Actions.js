export const GET_CHARACTERS = "GET_CHARACTERS";

// En tu acción Redux
export const getCharacters = () => {
    return function (dispatch) {
      fetch("http://localhost:3001/character")
        .then((response) => response.json())
        .then((data) => {
            dispatch({
            type: GET_CHARACTERS,
            payload: data,
          });
        })
        .catch((error) => {
          console.error("Error fetching characters:", error);
        });
    };
  };
  
  
