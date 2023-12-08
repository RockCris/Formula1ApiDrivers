import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getCharacters } from "../../Redux/Actions";

class CardsClass extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { characters } = this.props;
    if (!characters) {
      return <p>Loading...</p>;
    }
//    const { id, name, number, code, image } = this.props;

    return (
      <div>
        <h1>CardClass</h1>
        <div>
          {characters.map((char) => (
            <Card key={char.id} id={char.id} name={char.name} number={char.number} code={char.code}  image={char.image} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.characters);
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsClass);
