import './css/Home.css';
import Tree from '../components/Tree';
function App() {
  return (
    <>
      <section className = "columns">
      <Tree 
       name="live oak"
       description = "Doesn't lose it's leaves"
       image = "../images/liveoak-img.jpg"/>

      <Tree 
      name="dogwood"
      description = "flowers in spring"
      image = "images/pink-dogwood-tree-img.jpg"/>
      </section>
    </>
  );
}

export default App;
