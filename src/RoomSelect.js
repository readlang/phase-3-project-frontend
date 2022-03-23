import React, {useEffect, useState} from 'react'
import RoomCreate from "./RoomCreate";
import RoomListItem from './RoomListItem';

function RoomSelect({user, setLocation, roomListData, setRoomListData}) {
    // not sure if user is needed in this component

    // function to add a room to roomListData
    function addRoom(newRoom) {
        if (newRoom.message) {
            
            alert("Room already exists.  Please use a unique name.")
        } else {
            setRoomListData([...roomListData, newRoom])
        }
    }

    return (
        <div>
            <h3>Select a Room, {user.username}</h3>
            Room list here
            { roomListData.map(room => <RoomListItem key={room.id} roomItem={room} setLocation={setLocation}/> ) }
 
            <RoomCreate addRoom={addRoom} />
        </div>
        
    );
}

export default RoomSelect;