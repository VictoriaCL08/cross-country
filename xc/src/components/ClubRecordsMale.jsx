import "./css/ClubRecord.css"
import {useState, useEffect} from "react";
import axios from "axios";
import Record from "./RecordMale";
import AddClubRecordMale from "./AddClubRecordMale";

const ClubRecordsM = () => {
    const [recordsMale, setRecordsMale] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
            (async ()=>{
                //http://localhost:3001/api/recordsMale
                const response = await axios.get("https://xc-server-backend.onrender.com/api/recordsMale");
                setRecordsMale(response.data);
            })();
    
    }, []);

        const openAddDialog = () => {
            setShowAddDialog(true);
        }
        const closeAddDialog = () => {
            setShowAddDialog(false);
        }
    
        const updateRecordsMale = (record) => {
            setRecordsMale((recordsMale)=>[...recordsMale, record]);
        }

    return(
        
        <>
            <h2 className="records-h2">Men's Records</h2>
            <button className="add-btn" id="add-recordM" onClick={openAddDialog}>+</button>
            
            {showAddDialog?(
                <AddClubRecordMale
                closeAddDialog={closeAddDialog}
                updateRecordsMale={updateRecordsMale}/>
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
                {recordsMale.map((record)=>(
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

export default ClubRecordsM;