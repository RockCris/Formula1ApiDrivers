// En tu archivo Actions.js
export const GET_CHARACTERS = "GET_CHARACTERS";
export const CREATE_CHARACTER = "CREATE_CHARACTER";

export const getCharacters = (searchValue = "") => {
  return async function (dispatch) {
    try {
      // Lógica para obtener personajes
      const url = `http://localhost:3001/character?search=${searchValue}`;
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: GET_CHARACTERS,
        payload: data,
      });

    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };
};

export const createCharacter = (characterData) => {
  return async function (dispatch) {
    try {
      const url = 'http://localhost:3001/character';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
      });

      const data = await response.json();

      dispatch({
        type: CREATE_CHARACTER,
        payload: data,
      });
    } catch (error) {
      console.error("Error creating character:", error);
    }
  };
};
