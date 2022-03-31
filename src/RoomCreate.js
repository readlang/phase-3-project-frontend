import React, {useState} from "react";

function RoomCreate({addRoom}) {
    const [roomName, setRoomName] = useState("")
    const [roomDetail, setRoomDetail] = useState("")

    function handleSubmit (event) {
        event.preventDefault();
        // console.log(`${roomName} ${roomDetail}`)
        fetch("http://localhost:9292/rooms", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({room_name: roomName, room_detail: roomDetail})
        })
        .then(r => r.json())
        .then(newRoom => addRoom(newRoom))
        setRoomName("")
        setRoomDetail("")
    }

    return (
        <div id="roomcreate">
            <h4>Create New Room</h4>
            <form onSubmit={handleSubmit} >
                <input type="text" name="Name" placeholder="Name"
                value={roomName} onChange={e => setRoomName(e.target.value)} />
                <br/>
                <input type="text" name="Details" placeholder="Details"
                value={roomDetail} onChange={e => setRoomDetail(e.target.value)} />
                <br/>
                <input type="submit" value= "Create Room"/>
            </form>
        </div>
    );
}

export default RoomCreate;