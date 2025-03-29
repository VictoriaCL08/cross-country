import "./css/Header.css";
import Navigation from "./Navigation";
import logoimg from './images/logo-50x50.png';

function Header() {
return (
    <header className="columns">
        <div className="columns-noflex one">
            <img src={logoimg} alt=""></img>
            <h1> Carolina XCTF Club </h1>
        </div>
        <div className="one">
            <Navigation />
        </div>
    </header>
);
};

export default Header;