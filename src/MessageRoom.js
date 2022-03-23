import React, {useEffect, useState} from 'react';
import MessageCreate from "./MessageCreate"
import MessageItem from "./MessageItem"

function MessageRoom({user, room}) {
    //  the app will have to check in for new messages on an automatic cycle (every 5 seconds?)
    // should this just do that on a timer setTimeout() or interval
    const [messageList, setMessageList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/messages`)
        .then(r => r.json())
        .then(d => setMessageList(d))
    }, [])
    console.log("message list", messageList)
 
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/users`)
        .then(r => r.json())
        .then(d => setUserList(d))
    }, [])
    console.log("user list", userList)

    return (
        <div>
            <h3>Room Name: {room.room_name}</h3>
            <p>Details</p>
            { messageList.map(eachMessage => 
                <MessageItem key={eachMessage.id} message={eachMessage} 

                    author={ userList.find(eachUser => eachUser.id === eachMessage.user_id ) }
                /> ) }
            <MessageCreate />
        </div>
    );
}

export default MessageRoom;