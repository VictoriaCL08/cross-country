import "./css/Dialog.css";
import React, { useState } from "react";

const EditOfficer = (props) => {
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

    const response = await fetch(`http://localhost:3001/api/officers/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Officer editted successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editOfficer(await response.json());
    }
    else {
      setResult("Error editting your officer");
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
            <h3>Edit Officer</h3>
                <p><label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" defaultValue={props.position} required /></p>

                <p><label htmlFor="name ">Name:</label>
                <input type="text" id="name" name="name" defaultValue={props.name} required /></p>

                <p><label htmlFor="major">Major:</label>
                <input type="text" id="major" name="major" defaultValue={props.major} required /></p>

                <p><label htmlFor="year">Year:</label>
                <input type="text" id="year" name="year" defaultValue={props.year} required /></p>

                <p><label htmlFor="hometown">Home town:</label>
                <input type="text" id="hometown" name="hometown" defaultValue={props.hometown} required /></p>

                <p><label htmlFor="favorite_event">Favorite Event:</label>
                <input type="text" id="favorite_event" name="favorite_event" defaultValue={props.favorite_event} required /></p>
          

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

export default EditOfficer;