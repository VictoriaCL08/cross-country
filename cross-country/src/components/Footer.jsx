import './css/Footer.css';
import instaimg from './images/instagram-img.png'


function Footer() {
    return(
        <footer className="columns one">
            <div className="two">
                <h2>Carolina Cross Country and Track and Field Club</h2>
            </div>
            <div className="one">
                <a href="https://www.instagram.com/carolinaclubxctf/?igsh=MWZ3bXMwMWt1dzlxMQ%3D%3D#"><img src={instaimg}></img></a>
            </div>
        </footer>
    )

};

export default Footer;