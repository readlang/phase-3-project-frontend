import React, {useEffect, useState} from 'react';
import MessageCreate from "./MessageCreate"
import MessageItem from "./MessageItem"

function MessageRoom({user, room}) {
    const [editMode, setEditMode] = useState(false)
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
    //console.log("message list", messageList)
 
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/users`)
        .then(r => r.json())
        .then(d => setUserList(d))
    }, [messageList])
    //console.log("user list", userList)

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

    function handleDeleteMessage(message){
        console.log("delete!", message)
        fetch(`http://localhost:9292/messages/${message.id}`, {
            method: 'DELETE',
            headers: {"content-type": "application/json"}
        })
        .then(r => r.json())
        .then(returnMessage=>console.log(returnMessage))  // -------------------------------------------- need to remove from the messages state
    }

    return (
        <div id="messageroom">
            <h3>Room Name: {room.room_name}</h3>
            <div id="messageroomheader">
                
                <div>
                    
                    <span style={{marginLeft: "20px"}} >{room.room_detail}</span>
                </div>
                <div style={{marginRight: "20px"}} >
                    <span >message edit </span>
                    <label class="switch"> 
                        <input type="checkbox" onChange={e => setEditMode(e.target.checked)} ></input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="scrollable">
                { messageList.map(eachMessage => 
                    <MessageItem key={eachMessage.id} message={eachMessage} 
                        myMessage={ user.id === eachMessage.user_id ? "yes" : "no" }
                        editMode={editMode}
                        author={ userList.find(eachUser => eachUser.id === eachMessage.user_id ) }
                        handleDeleteMessage={handleDeleteMessage}
                    /> ) }
            </div>
            <MessageCreate handleNewMessage={handleNewMessage} />
        </div>
    );
}

export default MessageRoom;