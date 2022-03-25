
function MessageItem({message, author={username: "Loading"}}) {
    return(
        <div id="messageitem">
            <p>{message.message_text} </p>
            <p>-{author.username } </p>
        </div>
    )
}

export default MessageItem;