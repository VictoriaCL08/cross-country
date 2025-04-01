import './css/ContentGarnet.css';
import {useState} from "react"; //need this for pruned tree method

function ContentGarnet(props) {
    const [pruned, pruneTree] = useState(false);//variable name, method to change its state

    const doTreeJob = () => {  //method to prune tree
        pruneTree(!pruned);
    };

    return(
        <section className='main-section columns'>
            <div className='section-img one'>
                <img src={process.env.PUBLIC_URL + "/" + props.img}/>
                
                <button onClick = {doTreeJob}>Prune This Tree</button> 

            </div>
            <div className='section-words three'>
                <h3 className={pruned?"done":""}>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </section>
    );
};

export default ContentGarnet;