import './css/ClubRecords.css'
import ClubRecordsFemale from "../components/ClubRecordsFemale";
import ClubRecordsMale from "../components/ClubRecordsMale";

function ClubRecords() {

  return (
    <main>
        <div className ="spacer">
            <ClubRecordsFemale/>
        </div>
        <ClubRecordsMale />
    </main>

  )  
};

export default ClubRecords;