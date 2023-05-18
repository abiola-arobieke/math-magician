import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="d-flex navbar mx-10c">
      <div>
        <h1>Math Magician</h1>
      </div>
      <ul>
        <Link to="/" className="nav-btn">
          Home
        </Link>
        |
        <Link to="/calculator" className="nav-btn">
          Calculator
        </Link>
        |
        <Link to="/quote" className="nav-btn">
          Quote
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
