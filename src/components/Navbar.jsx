import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar">
            <ul className="link-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;