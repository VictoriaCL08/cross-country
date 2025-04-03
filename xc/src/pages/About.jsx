import './css/About.css';
import OfficerL from "../components/OfficerL";
import OfficerR from "../components/OfficerR";



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
        year="Junior"
        home="Irmo, SC"
        event="1600 m"

      />
      <OfficerR 
        title="Track Presidnet"
        name="Sydney Rose"
        year="Junior"
        home="Lexington, Ky"
        event="400 m and 4x400 m"
        img="./images/track-prez-pic.png"
      />
      <OfficerL 
        img="./images/vp-pic.png"
        title="Vice Presidnet"
        name="Ellie Toth"
        year="Junior"
        home="East Fishkill, NY"
        event="800 m and 1500 m"

      />
      <OfficerR 
        title="Treasurer"
        name="Victoria Colon-LaBorde"
        year="Junior"
        home="Aiken, SC"
        event="1600 m and 5K"
        img="./images/treasurer-pic.png"
      />
    </main>
  )  
};

export default About;