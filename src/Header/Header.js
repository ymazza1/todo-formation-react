import "./Header.css";
import { Link } from "react-router";
import { CheckSquare } from "lucide-react";

function Header() {
  return (
    <header className="app-header">
      <CheckSquare id="CheckSquare" size={32} />
      <h1>Ma Todo</h1>
      <Link to="/about">About</Link>
    </header>
  );
}

export default Header;
