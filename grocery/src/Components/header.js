import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand">
              Logo
          </Link>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <Link to='/' className="m-2">
            Home
          </Link>
          <Link to='/aboutus' className="m-2">
            About US
          </Link>
          <Link to='/contactus' className="m-2">
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
