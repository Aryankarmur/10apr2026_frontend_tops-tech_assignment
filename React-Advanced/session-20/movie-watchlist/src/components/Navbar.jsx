import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 Movie Watchlist</h2>

      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;