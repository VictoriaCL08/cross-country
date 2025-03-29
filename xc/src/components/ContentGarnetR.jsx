import './css/ContentGarnet.css';

function ContentGarnet(props) {
    return(
        <section className='main-section columns'>
        <div className='section-words three'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
        <div className='section-img one'>
            <img src={process.env.PUBLIC_URL + "/" + props.img}/>
        </div>
        </section>
    );
};

export default ContentGarnet;