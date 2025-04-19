import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteRecordFemale = (props) => {
  const [result, setResult] = useState("");

  const deleteRecordFemale = async() => {
    const response = await fetch(`http://localhost:3001/api/recordsFemale/${props._id}`,{
      method:"DELETE"
    });

    if(response.status === 200){
      setResult("Record deleted successfully");
      props.closeDeleteDialog();
      props.hideRecordFemale();
    } else {
      setResult("Sorry, we couldn't delete your record right now");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick = {props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.event}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteRecordFemale}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecordFemale;