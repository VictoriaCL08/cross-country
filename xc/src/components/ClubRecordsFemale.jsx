import "./css/ClubRecord.css"
import {useState, useEffect} from "react";
import axios from "axios";
import Record from "./Record";
import AddClubRecordFemale from "./AddClubRecordFemale";

const ClubRecordsF = () => {
    const [recordsFemale, setRecordsFemale] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
            (async ()=>{
                const response = await axios.get("http://localhost:3001/api/recordsFemale");
                setRecordsFemale(response.data);
            })();
    
    }, []);

        const openAddDialog = () => {
            setShowAddDialog(true);
        }
        const closeAddDialog = () => {
            setShowAddDialog(false);
        }
    
        const updateRecordsFemale = (record) => {
            setRecordsFemale((recordsFemale)=>[...recordsFemale, record]);
        }

    return(
        
        <>
            <button id="add-recordF" onClick={openAddDialog}>+</button>
            {showAddDialog?(
                <AddClubRecordFemale
                closeAddDialog={closeAddDialog}
                updateRecordsFemale={updateRecordsFemale}/>
            ):
            ("")}
            <table className="records-table">
                <tr>
                    <th>Event</th>
                    <th>Name</th>
                    <th>Mark</th>
                    <th>Meet</th>
                    <th>Year</th>
                </tr>
                {recordsFemale.map((record)=>(
                    <Record
                        id={record.id}
                        key={record.event}
                        event={record.event}
                        name={record.name}
                        mark={record.mark}
                        meet={record.meet}
                        year={record.year}
                    />
                ))}
            </table>
        </>
    )


};

export default ClubRecordsF;