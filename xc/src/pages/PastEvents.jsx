import './css/PastEvents.css'
import ContentGarnetL from '../components/ContentGarnetL'
import ContentGarnetR from '../components/ContentGarnetR'

function PastEvents() {
  return (
    <main>
    <ContentGarnetL
      img='./images/XC-race-start.png'
      title="Cross Country Meets"
      desc="We race in NIRCA-hosted meets against other University club teams as well as some local road races.
        Competing in the cross country meets is completely optional."
    />
    <ContentGarnetR
      title="Track Meets"
      desc="We participate in both NIRCA-hosted track meets as well as a few collegiate track meets. Competing in the meets is 
        completely optional"
      img="./images/track-group-img.png"
    />
    <ContentGarnetL
      img="./images/xc-banquet-2023.png"
      title="Pasta Dinners"
      desc="We get together before some races to carb load before the race. The pasta dinner is provided by the club."
    />
    <ContentGarnetR
      title="Weekend Trips"
      desc='For one of the meets each semester, we have a weekend trip where we travel to our destination on Friday, compete 
        on saturday, and then return back to Columbia on Sunday. During the fall, we travel to Boone, NC for the Mountaineer
        Invitational XC meet. In the spring, we travel to the UGa-hosted track meet.'
      img="./images/mountain-weekend.png"
    />
    <ContentGarnetL
      img="images/cookie-run.png"
      title="Milkshake and Cookie Runs"
      desc="Once a semester, we run to five points and get a club-paid-for sweet treat. Just make sure not to get
        sick on the run back!"
    />
    <ContentGarnetR
      title="Palmetto Picnic"
      desc="As weather permits, we will have a weekend long run at the nearby palmetto trail. After the run, the club
        provides bagels, sandwiches, and ice cream as post-long run picnic."
      img="./images/harbison-2023.png"
    />
    <ContentGarnetL
      img="./images/4x4x48-2024.png"
      title="4x4x48"
      desc="Every year, our bravest club members participate in teh 4x4x48 challenge. Starting on a Friday,
        they run 4 miles every 4 hours for 48 hours. Sounds fun, right?"
    />
    </main>
  )  
};

export default PastEvents;