import "./css/Dialog.css";
import React, { useState } from "react";

const EditEvent = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
};

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(`http://localhost:3001/api/events/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Event editted successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editEvent(await response.json());
    }
    else {
      setResult("Error editting your event");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>

              <label htmlFor="event_name ">Event Name:</label>
              <input
                type="text"
                id="event_name"
                name="event_name"
                defaultValue={props.event_name}
                required
              />
            </p>
            <p>
              <label htmlFor="event_date">Date:</label>
              <input
                type="text"
                id="event_date"
                name="event_date"
                defaultValue={props.event_date}
                required
              />
            </p>
            <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
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

export default EditEvent;