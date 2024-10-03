import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="header-content col-md-6">
                        <Link to="/"><h1>Van Luu</h1></Link>
                    </div>
                    <div className="navbar col-md-6">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li className="dropdown">
                                <a href="#">Dropdown</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Dropdown</a></li>
                                    <li><a href="#">Dropdown</a></li>
                                    <li><a href="#">Dropdown</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
      </nav>
    );
  }
export default Navbar;