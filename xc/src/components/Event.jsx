import './css/Event.css'
import React, { useState } from "react";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";

//       http://localhost:3001/images/

const Event = (props)=> {
  const [event, setEvent] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showEvent, setShowEvent] = useState(true);
  
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
  
    const hideEvent = () => {
      setShowEvent(false);
    };
  
    const editEvent = (event) => {
      setEvent(event);
    };

  return (
    <>

    {showEvent?(
      <div>
      {showDeleteDialog?(
        <DeleteEvent 
          event_name={event.event_name}
          _id={event._id}
          closeDeleteDialog = {closeDeleteDialog}
          hideEvent = {hideEvent}
        />
      ):("")}

      {showEditDialog?(
        <EditEvent
          _id={event._id}
          event_name={event.event_name}
          event_date={event.event_date}
          closeEditDialog={closeEditDialog}
          editEvent = {editEvent}
        />
      ):("")}

      

      <div className="event-div">
        <section id="change-buttons">
          <a href="#" onClick={openEditDialog} >
            &#9998;
          </a>
          <a href="#" onClick={openDeleteDialog}>
            &#x2715;
          </a>
        </section>
          <h3>{event.event_name}</h3>

          <p>{event.event_date}</p>
          <img src={"https://xc-server-backend.onrender.com/images/"+event.img}/>
      </div>


      </div>
    ):("")}
    </>
  )  
};

export default Event;