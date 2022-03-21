import React, {useEffect, useState} from 'react';
import MessageCreate from "./MessageCreate"
import MessageItem from "./MessageItem"


function MessageRoom({user, room}) {
    
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/room/${room.id}/messages`)
        .then(r => r.json())
        .then(d => setMessageList(d))
    }, [])

    console.log("message list", messageList)
    
    return (
        <div>
            <h3>Room Name: {room.room_name}</h3>
            <p>Details</p>
            { messageList.map(eachMessage => <MessageItem key={eachMessage.id} message={eachMessage} /> ) }
            <MessageCreate />
        </div>
    );
}

export default MessageRoom;