import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, number, code, image } = this.props;

    // Verificar si image es un objeto con la propiedad url antes de intentar acceder a url
    const imageUrl = image && image.url ? image.url : '';
    console.log('imagen como se veria  '+number+'  '+code+'  '+imageUrl);
    const { forename, surname } = name;

    return (
      <div>
        <div>
          <p>ID: {id}</p>
          <p>Number: {number}</p>
          <p>Code: {code}</p>
          <p>Name: {forename} {surname}</p>
          {/* Verificar si imageUrl no está vacío antes de mostrar la imagen */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={`Image of ${forename} ${surname}`}
              style={{
                display: 'block',  // Para centrar la imagen
                margin: '0 auto',  // Para centrar la imagen
                maxWidth: '300px', // Establecer un tamaño máximo moderado
                width: '100%',     // Hacer que la imagen ocupe el 100% del contenedor
                height: 'auto'     // Mantener la proporción original de la imagen
              }}
            />
          )}
          <hr />
        </div>
      </div>
    );
    
  }
}

export default Card;
