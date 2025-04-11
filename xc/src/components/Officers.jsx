import {useState, useEffect} from "react";
import axios from "axios";
import OfficerL from "./OfficerL";
import AddOfficer from "./AddOfficer";


// https://github.com/VictoriaCL08/VictoriaCL08.github.io/blob/main/csce242/json/about-us.json
//https://xc-server-backend.onrender.com/api/officers
const Officers = () => {
    const [officers, setofficers] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:3001/api/officers");
            setofficers(response.data);
        })();

    }, []);
    
    const openAddDialog = () => {
        setShowAddDialog(true);
    }
    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    const updateOfficers = (officer) => {
        setofficers((officers)=>[...officers, officer]);
    }


    return(
        <>
            <button id="add-officer" onClick={openAddDialog}>+</button>
            {showAddDialog?(
                <AddOfficer
                closeAddDialog={closeAddDialog}
                updateOfficers={updateOfficers}/>
            ):
            ("")}
            <div>
                {officers.map((officer)=>(

                    <OfficerL
                        key={officer.name}
                        _id={officer.id}
                        title={officer.position}
                        name={officer.name}
                        major={officer.major}
                        year={officer.year}
                        home={officer.hometown}
                        event={officer.favorite_event}
                        img={officer.img}
                    />
                ))}
            </div>
        </>


    );
};

export default Officers;