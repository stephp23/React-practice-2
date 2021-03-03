import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link style={navStyle} to="/dogs">
          <li>Dogs</li>
        </Link>
        <Link style={navStyle} to="/cats">
          <li>Cats</li>
        </Link>
      </ul>
    </nav>
  );
}
