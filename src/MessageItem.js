
function MessageItem({message}) {

    console.log(message);
    console.log(message.message_text)

    return(
        <div>
            <p>{message.message_text} </p>
        </div>
        
    )
}

export default MessageItem;