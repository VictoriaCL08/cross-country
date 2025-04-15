import "./css/HousePlan.css";
import React, { useState } from "react";
import EditHousePlan from "./EditHousePlan";
import DeleteHousePlan from "./DeleteHousePlan";

const HousePlan = (props) => {
  const [housePlan, setHousePlan] = useState(props);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showHousePlan, setShowHousePlan] = useState(true);

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

  const hideHousePlan = () => {
    setShowHousePlan(false);
  };

  const editHousePlan = (house) => {
    setHousePlan(house);
  };

  return (
    <>
      {showHousePlan?(
        <div>
            {showDeleteDialog?(
              <DeleteHousePlan
              name={housePlan.name}
              _id={housePlan._id}
              closeDeleteDialog = {closeDeleteDialog}
              hideHousePlan = {hideHousePlan}
            />
            ):("")}
            
            {showEditDialog?(
               <EditHousePlan
               _id={housePlan._id}
               name={housePlan.name}
               size={housePlan.size}
               main_image={housePlan.main_image}
               bedrooms={housePlan.bedrooms}
               bathrooms={housePlan.bathrooms}
               features={housePlan.features}
               closeEditDialog = {closeEditDialog}
               editHousePlan = {editHousePlan}
             />
            ):("")}
           

          <section className="house-plan columns">
            <section className="feature-image">
              <img
                src={"http://localhost:3001/images/" + housePlan.main_image}
                alt={housePlan.name}
              />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog} >
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Size: {housePlan.size}</p>
              <p>Bedrooms: {housePlan.bedrooms}</p>
              <p>Bathrooms: {housePlan.bathrooms}</p>
            </section>
          </section>
        </div>
      ):("")}
    </>
  );
};

export default HousePlan;