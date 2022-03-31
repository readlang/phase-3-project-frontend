import React from 'react'
import RoomCreate from "./RoomCreate";
import RoomListItem from './RoomListItem';

function RoomSelect({ setLocation, roomListData, setRoomListData}) {

    function addRoom(newRoom) {
        if (newRoom.message) {
            alert("Room already exists.  Please use a unique name.")
        } else {
            setRoomListData([...roomListData, newRoom])
        }
    }

    return (
        <div id="roomselect">

            <div className="scrollable">
                { roomListData.map(room => <RoomListItem key={room.id} roomItem={room} setLocation={setLocation}/> ) }
            </div>
            <RoomCreate addRoom={addRoom} />
        </div>
    );
}

export default RoomSelect;