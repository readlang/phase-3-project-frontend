import React, {useState, useEffect} from 'react'

function MessageCreate({handleNewMessage}) {
    const [messageText, setMessageText] = useState("")

    function handleSubmit (event) {
        event.preventDefault();
        console.log(messageText)
        handleNewMessage(messageText)
        setMessageText("")
    }

    return (
        <div id="messagecreate">
            <form onSubmit={handleSubmit} >
                <input type="text" name="message" value={messageText} onChange={e => setMessageText(e.target.value)} />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}

export default MessageCreate;