import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, number, code, image } = this.props;

    // Verificar si image es un objeto con la propiedad url antes de intentar acceder a url
    const imageUrl = image && image.url ? image.url : "";
    console.log(
      "imagen como se veria  " + number + "  " + code + "  " + imageUrl
    );
    const { forename, surname } = name;

    return (
      <div className="Card" style={{ position: "relative" }}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image of ${forename} ${surname}`}
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              maxHeight: "700px", // Establecer un tamaño máximo para la altura
              width: "100%",
              height: "auto",
            }}
          />
        )}
        <p className="CardFormulaNumber">{id}</p>
        <div className="contenedorRojo">
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {forename} {surname}
          </p>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Number:</strong> {number}
          </p>
          <p>
            <strong>Code:</strong> {code}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
