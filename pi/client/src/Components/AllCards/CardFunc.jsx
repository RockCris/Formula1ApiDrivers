import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../Redux/Actions";

const CardFunc = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  // Verifica si characters es un array antes de realizar el map
  if (!Array.isArray(characters)) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Cards Funciona</h1>
      <div>
        {characters.map((char) => (
          <Card id={char.id} name={char.name} key={char.id} />
        ))}
      </div>
    </div>
  );
};

export default CardFunc;
