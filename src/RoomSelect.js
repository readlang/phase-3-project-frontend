import RoomCreate from "./RoomCreate";

function RoomSelect({user}) {
    // fetch to get room names

    return (
        <div>
            <h3>Select a Room, {user.username}</h3>
 
            <RoomCreate />


        </div>
        
    );
}

export default RoomSelect;