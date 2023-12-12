// Header.jsx
import { Link } from "react-router-dom";
import f1 from "../Images/formula1.png";
import carF1 from "../Images/carroF1.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-section">
        <div className="image-container">
          <img src={f1} alt="Icon" className="responsive-image" />
        </div>
      </div>
      <div className="right-section">
        <div>
          <Link to="/" className="enlaceEstilizado">
            Home
          </Link>
        </div>
        <div>
          <Link to="/create" className="enlaceEstilizado">
            Create
          </Link>
        </div>
        <div>
          <Link to="/Search" className="enlaceEstilizado">
            Search
          </Link>
        </div>

        {/* 
  <div className="search-container">
    <input type="text" placeholder="Search" />
  </div>
*/}
      </div>
      <div className="image-container-red">
        <img src={carF1} alt="Icon" className="responsive-image" />
      </div>
    </div>
  );
};

export default Header;
