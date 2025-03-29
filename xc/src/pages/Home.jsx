import './css/Home.css';
import ContentGarnetL from '../components/ContentGarnetL';
import ContentGarnetR from '../components/ContentGarnetR';
import pic from "../components/images/group-img-index.png";

function App() {
  return (
    <main>
      <img src={pic}/>
      <ContentGarnetL 
        img="./images/XC-race-start.png"
        title="Mission Statement"
        desc="The Carolina XC/TF club caters to runners of all levels. Our goal as an organization 
          is to create an environment that is friendly for anyone
          who loves to run or who wants ot pick up running as a hobby. It is also an organization
          that will maintain a team to compete at an intercollegiate level. We compete against other club
          teams in both cross country races and track meets."
        />
      <ContentGarnetR 
        title="Who can Join"
        desc="We are open to runners of all levels from complete beginners who want to start running to experienced runners 
          who want to train and compete competitively. We compete in both cross country and track meets that are a part of 
          the National Intercollegiate Runnning Club Association (NIRCA). All meets are optional."
        img="./images/xc-race-img-men.png"
      />
      <ContentGarnetL
      img='./images/xc-race.png'
      title='Club Membership'
      desc='Make sure to fill out the sports club waiver and join DSE within your first week of joining. 
        To find out more information about joining the club, 
        check out our instagram or garnet gate page and join the groupme.'
      />
    </main>
  );
}

export default App;
