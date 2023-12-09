import React, { useState } from 'react';
import Header from './PageModel/Header';
import Footer from './PageModel/Footer';
import carF1 from "../Components/Images/Formula1Create.png";

const CreatePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Actualizar el estado correspondiente según el nombre del campo
    switch (name) {
      case 'forename':
        setForename(value);
        break;
      case 'surname':
        setSurname(value);
        break;
      case 'id':
        setId(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'code':
        setCode(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header />
      <div className='Container'>
        <div className='CardNew'>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                name="forename"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Numero</label>
              <input
                type="text"
                className="form-control"
                name="number"
                placeholder="Numero"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Codigo</label>
              <input
                type="text"
                className="form-control"
                name="code"
                placeholder="Codigo"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Imagen</label>
              <input
                type="text"
                className="form-control"
                name="imageUrl"
                placeholder="Imagen"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="image-container-create">
            <img
              src={ carF1} // Usa la URL proporcionada o la de carF1 si imageUrl está vacío
              alt={`Image of ${forename} ${surname}`}
              className="responsive-image-create"
            />
          </div>
        <div className="CardCreate" style={{ position: "relative" }}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={`Image of ${forename} ${surname}`}
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "300px",
                maxHeight: "700px",
                width: "100%",
                height: "auto",
              }}
            />
          )}
          <p className="CardFormulaNumberCreate">{id}</p>
          <div className="contenedorRojoCreate">
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

      </div>

    </div>
  );
};

export default CreatePage;
