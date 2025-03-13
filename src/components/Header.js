import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/users">User</Link>
                        </li>
                    </ul>
                    <div>
                        <button className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </button>
                        <button className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
