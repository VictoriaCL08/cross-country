import './css/About.css';
import OfficerL from "../components/OfficerL";
import OfficerR from "../components/OfficerR";
import Officers from "../components/Officers";



function About() {
  return (
    <main>
     
      <div class="officer-titles">
        <h2>Officers</h2>
        <hr></hr>
      </div>
      <Officers/>
    </main>
  )  
};

export default About;