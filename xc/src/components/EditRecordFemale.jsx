import "./css/Dialog.css";
import React, { useState } from "react";


const EditRecordFemale = (props) => {
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

    const response = await fetch(`http://localhost:3001/api/recordsFemale/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("record editted successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editRecordFemale(await response.json());
    }
    else {
      setResult("Error editting your record");
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
              <label htmlFor="event">Event:</label>
              <input
                type="text"
                id="event"
                name="event"
                defaultValue={props.event}
                required
              />
            </p>
            <p> 
              <label htmlFor="name ">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="mark">Mark:</label>
              <input
                type="text"
                id="mark"
                name="mark"
                defaultValue={props.mark}
                required
              />
            </p>
            <p>
              <label htmlFor="meet">Meet:</label>
              <input
                type="text"
                id="meet"
                name="meet"
                defaultValue={props.meet}
                required
              />
            </p>
            <p>
              <label htmlFor="year">Year:</label>
              <input
                type="number"
                id="year"
                name="year"
                defaultValue={props.year}
                required
              />
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

export default EditRecordFemale;