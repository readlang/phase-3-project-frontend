import React, {useEffect, useState} from 'react';
import MessageCreate from "./MessageCreate"
import MessageItem from "./MessageItem"

function MessageRoom({user, room}) {
    const [editMode, setEditMode] = useState(false)
    const [messageList, setMessageList] = useState([])

    function getMessages() {
        // console.log("fetching...")
        fetch(`http://localhost:9292/rooms/${room.id}/messages`)
        .then(r => r.json())
        .then(d => setMessageList(d))
    }

    // websockets seems like the way to do this realtime, which is beyond the scope of this learning project
    useEffect(() => {
        getMessages();      // loads the first time
        const intervalId = setInterval(getMessages, 5000)   // then reloads every 5 seconds
        return function() {
            clearInterval(intervalId)
        }
    }, [])
 
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/users`)
        .then(r => r.json())
        .then(d => setUserList(d))
    }, [messageList, room.id])
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
        console.log("delete!", messageList, message)
        fetch(`http://localhost:9292/messages/${message.id}`, {
            method: 'DELETE',
            headers: {"content-type": "application/json"}
        })
        .then(r => r.json())
        .then(returnMessage => setMessageList( messageList.filter( each => each.id !== returnMessage.id ) ) ) 
    }

    return (
        <div id="messageroom">
            <h3>Room Name: {room.room_name}</h3>
            <div id="messageroomheader">
                <div>
                    <span id="roomdetail" >{room.room_detail}</span>  
                </div>
                <div id="deletemodeswitch"  >   
                    <span >delete mode </span>
                    <label className="switch"> 
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