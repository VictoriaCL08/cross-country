import "./css/Dialog.css";
import React, {useState} from "react";

const AddEvent = (props) => {
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
        
        const response = await fetch("http://localhost:3001/api/events", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Event added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateEvents(await response.json());
        } else {
            setResult("Error adding event");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Event</h3>
                        <div className="columns-noflex">
                            <div className="labels one">
                                <p><label htmlFor="event_name">Event Name:</label></p>
                                <p><label htmlFor="event_date">Event Date:</label></p>
                            </div>
                            <div className="inputs two">
                                <p><input type="text" id="event_name" name="event_name" required min="1"></input></p>
                                <p><input type="text" id="event_date" name="event_date" min="1" required></input></p>
                            </div>
                        </div>
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

export default AddEvent;