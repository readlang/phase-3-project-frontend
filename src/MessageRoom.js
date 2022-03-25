import React, {useEffect, useState} from 'react';
import MessageCreate from "./MessageCreate"
import MessageItem from "./MessageItem"

function MessageRoom({user, room}) {
    //  the app will have to check in for new messages on an automatic cycle (every 5 seconds?)
    // should this just do that on a timer setTimeout() or interval
    const [messageList, setMessageList] = useState([])
    
    const [changingNumber, setChangingNumber] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() =>{ setChangingNumber( Math.random() ) }, 5000)
        return function() {
            clearInterval(intervalId)
        }
    }, [])
    
    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/messages`)
        .then(r => r.json())
        .then(d => setMessageList(d))
    }, [changingNumber])
    console.log("message list", messageList)
 
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/users`)
        .then(r => r.json())
        .then(d => setUserList(d))
    }, [messageList])
    console.log("user list", userList)

    function handleNewMessage(messageText) {
        fetch(`http://localhost:9292/rooms/${room.id}/messages`, {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                user_id: user.id,
                room_id: room.id,
                message_text: messageText
            })
        })
        .then(r => r.json())
        .then(newMessage=> setMessageList([...messageList, newMessage ]) )
    }

    return (
        <div id="messageroom">
            <h3>Room Name: {room.room_name}</h3>
            <p>Details</p>
            <div className="scrollable">
                { messageList.map(eachMessage => 
                    <MessageItem key={eachMessage.id} message={eachMessage} 

                        author={ userList.find(eachUser => eachUser.id === eachMessage.user_id ) }
                    /> ) }
            </div>
            <MessageCreate handleNewMessage={handleNewMessage} />
        </div>
    );
}

export default MessageRoom;