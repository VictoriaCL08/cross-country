import "./css/ClubRecord.css";
//import React, { useState } from "react";
//import EditRecordFemale from "./EditRecordFemale";
//import DeleteRecordFemale from "./DeleteRecordFemale";

///////////////////////////////////////start here
const Record = (props) => {
    /*const [recordFemale, setRecordFemale] = useState(props);
      const [showEditDialog, setShowEditDialog] = useState(false);
      const [showDeleteDialog, setShowDeleteDialog] = useState(false);
      const [showRecordFemale, setShowRecordFemale] = useState(true);
    
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
    
      const hideRecordFemale = () => {
        setShowRecordFemale(false);
      };
    
      const editRecordFemale = (record) => {
        setRecordFemale(record);
      };
{showRecordFemale?(
                <>

                {showDeleteDialog?(
                    <DeleteRecordFemale
                        name={recordFemale.name}
                        _id={recordFemale._id}
                        closeDeleteDialog = {closeDeleteDialog}
                        hideRecordFemale = {hideRecordFemale}
                    />
                ):("")}
                {showEditDialog?(
                    <EditRecordFemale
                        _id={recordFemale._id}
                        event={recordFemale.event}
                        name={recordFemale.name}
                        mark={recordFemale.mark}
                        meet={recordFemale.meet}
                        year={recordFemale.year}
                        closeEditDialog = {closeEditDialog}
                        editRecordFemale = {editRecordFemale}
                    />
                ):("")}*/

    return (
     
            
                
                    <tr>
                        <td>{props.event}  </td>
                        <td>{props.name}</td>
                        <td>{props.mark}</td>
                        <td>{props.meet}</td>
                        <td>{props.year}</td>
                    </tr> 
            
    );
};

export default Record;