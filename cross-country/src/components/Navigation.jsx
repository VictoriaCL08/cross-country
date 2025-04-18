import './css/Navigation.css';
import {Link} from "react-router-dom";

function Navigation() {
    return (

    <nav id='main-nav'>
        <ul className="columns">
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

export default Navigation