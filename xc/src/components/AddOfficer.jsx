import "./css/Dialog.css";
import React, {useState} from "react";

const AddOfficer = (props) => {
     const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3001/api/officers", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Officer added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateOfficers(await response.json());
        } else {
            setResult("Error adding Officer");
        }
    };

    return(
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Add New Officer</h3>

                        <p>
                            <label htmlFor="position">Officer Position:</label>
                            <input type="text" id="position" name="position"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="name">Officer Name:</label>
                            <input type="text" id="name" name="name"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="major">Major:</label>
                            <input type="text" id="major" name="major"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="year">Year:</label>
                            <input type="text" id="year" name="year"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="hometown">Home town:</label>
                            <input type="text" id="hometown" name="hometown"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="favorit_event">Favorite Event:</label>
                            <input type="text" id="favorite_event" name="favorite_event"  min="3" required></input>
                        </p>
                       
                    

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")}
                                    
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOfficer;