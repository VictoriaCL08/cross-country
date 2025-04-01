import "./css/SlideShow.css"
import {useState} from "react";

const SlideShow = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );

     const showNextImage = () => {
       
       /* if(imageIndes == images.length - 1){
            setImageIndex(0);
        }
        else{
        setImageIndex(imageIndex+1);
        }*/
       setImageIndex(imageIndex == images.length -1? 0: imageIndex+1);
     }

     const showPreviousImage = () => {
        setImageIndex(imageIndex == 0? imageIndex.length-1: imageIndex-1);
     }

    return (
        <section id="slideshow">
            <img src={images[imageIndex]} alt=""/>
            <p>
                <button onClick={showPreviousImage}>Previous</button>
                <button onClick = {showNextImage}>Next</button>
            </p>
        </section>
    );
};

export default SlideShow;