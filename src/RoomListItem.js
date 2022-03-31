import React from 'react';
import {Link} from 'react-router-dom'

function RoomListItem({ roomItem, setLocation }) {

    return (
        <div id="roomlistitem" onClick={() => setLocation(roomItem.id)} >
            <Link className="link" to={`/rooms/${roomItem.id}`}  >  
                <h4>{roomItem.room_name}</h4>
                <p>{roomItem.room_detail}</p>
                <hr/>
            </Link>
            
        </div>
    );
}

export default RoomListItem;