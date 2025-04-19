import "./css/Dialog.css";
import React, { useState } from "react";



//http://localhost:3001/api/events/
const DeleteEvent = (props) => {
  const [result, setResult] = useState("");

  const deleteEvent = async() => {
    const response = await fetch(`https://xc-server-backend.onrender.com/api/events/${props._id}`,{
      method:"DELETE"
    });

    if(response.status === 200){
      setResult("event deleted successfully");
      props.closeDeleteDialog();
      props.hideEvent();
    } else {
      setResult("Sorry, we couldn't delete your event righ now");
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
            <h3>Are you sure you want to delete the {props.event_name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteEvent}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;