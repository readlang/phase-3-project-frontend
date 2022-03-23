
function MessageItem({message, author={username: "Loading"}}) {

    // console.log(message);
    // console.log(message.message_text)

    return(
        <div>
            <p>{message.message_text} </p>
            <p>{author.username } </p>
        </div>
        
    )
}

export default MessageItem;