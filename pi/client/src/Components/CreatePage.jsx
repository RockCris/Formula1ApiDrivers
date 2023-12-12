import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './PageModel/Header';
import carF1 from "../Components/Images/Formula1Create.png";
import { createCharacter } from '../Redux/Actions'; // Ajusta la ruta según tu estructura

const CreatePage = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'forename':
        setForename(value);
        break;
      case 'surname':
        setSurname(value);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const characterData = {
      nombre: forename,
      apellido: surname,
      descripcion: 'Alguna descripción',
      imagen: imageUrl || 'URL_por_defecto',
      nacionalidad: 'Alguna nacionalidad',
      fechaNacimiento: '2023-01-01',
      // Agregar otros campos según sea necesario
    };

    dispatch(createCharacter(characterData));
  };

  return (
    <div>
      <Header />
      <div className='Container'>
        <div className='CardNew'>
          <form onSubmit={handleFormSubmit}>
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
            src={carF1}
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
          <p className="CardFormulaNumberCreate">{number}</p>
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
