import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function RoomListItem({ roomItem, setLocation }) {

    return (
        <div id="roomlistitem" onClick={() => setLocation(roomItem.id)} >
            <Link to="/room" style={{color: "black"}} >
                <h4>{roomItem.room_name}</h4>
                <p>{roomItem.room_detail}</p>
                <hr/>
            </Link>
            
        </div>
    );
}

export default RoomListItem;