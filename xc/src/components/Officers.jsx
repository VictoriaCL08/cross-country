import {useState, useEffect} from "react";
import axios from "axios";
import OfficerL from "./OfficerL";
import OfficerR from "./OfficerR";

// https://github.com/VictoriaCL08/VictoriaCL08.github.io/blob/main/csce242/json/about-us.json
const Officers = () => {
    const [officers, setofficers] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:3001/api/officers");
            setofficers(response.data);
        })();

    }, []);
    
    return(
        <div>
            {officers.map((officer)=>(
                
                   <OfficerL
                    id={officer.id}
                    title={officer.position}
                    name={officer.name}
                    major={officer.major}
                    year={officer.year}
                    home={officer.home_town}
                    event={officer.favorite_event}
                    img={officer.img}
                />
            ))}
        </div>


    );
};

export default Officers