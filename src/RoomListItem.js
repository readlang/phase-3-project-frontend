
function RoomListItem({ roomItem, setLocation }) {


    return (
        <div>
        <button onClick={() => setLocation(roomItem.id)} >
            <h4>{roomItem.room_name}</h4>
            <p>{roomItem.room_detail}</p>
            
        </button>
        <br/>
        </div>
    );
}

export default RoomListItem;