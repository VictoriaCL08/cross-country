import './css/Navigation.css';
import {Link} from "react-router-dom";
import {useState} from "react";

function Navigation() {

    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (

    <nav id='main-nav'>
        <button className="toggle-btn" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </button>

        <ul className={menuOpen?"":"hide-small"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/pastevents">Past Events</Link></li>
            <li><Link to="/clubrecords">Club Records</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
    </nav>


    );
};

export default Navigation;