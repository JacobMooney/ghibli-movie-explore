import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar">
      <div class="navContainer">
        <nav>
        <Link
          to={{
            pathname: "/",
          }}
          style={{textDecoration: 'none', color: '#ebe9e7'}}
        >
          <h1 class="logo">Studio Ghibli Movie Library</h1>
        </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
