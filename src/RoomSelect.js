import RoomCreate from "./RoomCreate";

function RoomSelect(params) {
    // fetch to get room names

    return (
        <div>
            <h3>Select a Room</h3>
            { /* map the array to create list items */ }
            <RoomCreate />


        </div>
        
    );
}

export default RoomSelect;