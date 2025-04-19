import "./css/Dialog.css";
import React, { useState } from "react";

//http://localhost:3001/api/officers/
const DeleteOfficer = (props) => {
  const [result, setResult] = useState("");
  console.log(props._id)

  const deleteOfficer = async() => {
    const response = await fetch(`https://xc-server-backend.onrender.com/api/officers/${props._id}`,{
      method:"DELETE"
    });

    if(response.status === 200){
      setResult("Officer deleted successfully");
      props.closeDeleteDialog();
      props.hideOfficer();
    } else {
      setResult("Sorry, we couldn't delete your officer right now");
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
            <h3>Are you sure you want to delete {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteOfficer}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOfficer;