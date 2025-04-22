import './css/Officer.css'
import React, {useState } from "react";
import EditOfficer from "./EditOfficer";
import DeleteOfficer from "./DeleteOfficer";

//      http://localhost:3001/images/    
const OfficerL = (props) => {
  const [officer, setOfficer] = useState(props);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showOfficer, setShowOfficer] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideOfficer = () => {
    setShowOfficer(false);
  };

  const editOfficer = (officer) => {
    setOfficer(officer);
  };



  return (
    <>
      {showOfficer?(
        <div>
          {showDeleteDialog?(
              <DeleteOfficer
                position={officer.position}
                _id={officer._id}
                closeDeleteDialog = {closeDeleteDialog}
                hideOfficer = {hideOfficer}
              />
          ):("")}
        
 
            {showEditDialog?(
                <EditOfficer 
                  _id={officer._id}
                  position={officer.position}
                  name={officer.name}
                  major={officer.major}
                  year={officer.year}
                  hometown={officer.hometown}
                  favorite_event={officer.favorite_event}
                  closeEditDialog={closeEditDialog}
                  editOfficer = {editOfficer}
                />

            ):("")}
  


            <section className="columns officer-main">
                <div className="img-section one">
                    <img src={"https://xc-server-backend.onrender.com/images/" + props.img} />
                </div>
                <div className="t0ext-section one">
                    <div id="change-buttons">
                      <a href="#" onClick={openEditDialog} >
                        &#9998;
                      </a>
                      <a href="#" onClick={openDeleteDialog}>
                        &#x2715;
                      </a>
                    </div>
                    <h3>{officer.position}</h3>
                    <h4>{officer.name}</h4>
                    <ul>
                        <li>Major: {officer.major}</li>
                        <li>Year: {officer.year}</li>
                        <li>Home town: {officer.hometown}</li>
                        <li>Favorite Event: {officer.favorite_event}</li>
                    </ul>
                </div>
            </section> 
       
        </div>
      ):("")}
    </>
  );  
};

export default OfficerL;