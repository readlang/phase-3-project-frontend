
function MessageItem({message, myMessage, editMode, author={username: "Loading"}, handleDeleteMessage }) {
    return(
        <div id="messageitemcontainer"  >   
            
            <div className = { myMessage === "yes" ? "mymessage" : "notmymessage" } id="messageitem" >
              
                
                <span> {message.message_text} </span>
                { myMessage === "yes" ? null : <p className="smallertext" >-{author.username } </p> }   
            </div> 
            {editMode ? <button id="xbutton" onClick={() => handleDeleteMessage(message) } >✖️</button> : null }
        </div>
    )
}

export default MessageItem;

// ❌✖️