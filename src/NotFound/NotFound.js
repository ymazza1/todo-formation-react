import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";

function NotFound() {
  return (
    <div>
      <div className="not-found-icon">
        <AlertTriangle size={60} />
      </div>
      <h2>Vous faites fausse route!</h2>
      <Link to="/" className="home-button">
        <Home size={18} />
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
