import './css/About.css';
import OfficerL from "../components/OfficerL";

function About() {
  return (
    <main>
      <div class="officer-titles">
        <h2>Officers</h2>
        <hr></hr>
      </div>
      <OfficerL 
        img="./images/xc-prex.png"
        title="Cross Country Presidnet"
        name="Carina Burdick"

      />
    </main>
  )  
};

export default About;