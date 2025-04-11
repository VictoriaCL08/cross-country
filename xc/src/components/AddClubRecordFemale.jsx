import "./css/Dialog.css";
import React, {useState} from "react";

const AddClubRecordFemale = (props) => {
     const [result, setResult] = useState("");


    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3001/api/recordsFemale", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Club Record added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateRecordsFemale(await response.json());
        } else {
            setResult("Error adding record");
        }
    };

    return(
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Add New Record</h3>

                        <p>
                            <label htmlFor="event">Event:</label>
                            <input type="text" id="event" name="event"  min="1" required></input>
                        </p>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name"  min="3" required></input>
                        </p>
                        <p>
                            <label htmlFor="mark">Mark:</label>
                            <input type="text" id="mark" name="mark"  min="1" required></input>
                        </p>
                        <p>
                            <label htmlFor="meet">Meet:</label>
                            <input type="text" id="meet" name="meet"  min="1" required></input>
                        </p>
                        <p>
                            <label htmlFor="year">Year:</label>
                            <input type="number" id="year" name="year"  min="2015" required></input>
                        </p>
                       
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

export default AddClubRecordFemale;