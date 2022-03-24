
function RoomListItem({ roomItem, setLocation }) {


    return (
        
        <div id="roomlistitem" onClick={() => setLocation(roomItem.id)} >
            <h4>{roomItem.room_name}</h4>
            <p>{roomItem.room_detail}</p>
            
        </div>
        
    );
}

export default RoomListItem;