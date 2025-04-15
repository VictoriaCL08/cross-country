import {useState, useEffect} from "react";

import axios from "axios";
import HousePlan from "./HousePlan";
import AddHousePlan from "./AddHousePlan";

//https://portiaportia.github.io/json/house-plans.json
const HousePlans = () => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data);
        })();

    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateHousePlans = (housePlan) => {
        setHouses((houses)=>[...houses, housePlan]);
    };


    return (
        <>
            <button id="add-house" onClick={openAddDialog}>+</button>

            {showAddDialog?(<AddHousePlan 
                                closeAddDialog={closeAddDialog} 
                                updateHousePlans={updateHousePlans}
                                /> ): ("")}
            
            <div id="house-plans" className="columns">
                {houses.map((house)=>(
                    <HousePlan
                    key={house.name}
                    _id={house._id}
                    name={house.name}
                    size={house.size}
                    bedrooms={house.bedrooms}
                    bathrooms={house.bathrooms}
                    main_image={house.main_image}/>
                ))}
                
            </div>
        </>
        
    );
};

export default HousePlans;