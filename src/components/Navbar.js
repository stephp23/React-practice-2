import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/team">
          <li>Team Page</li>
        </Link>
      </ul>
    </nav>
  );
}
