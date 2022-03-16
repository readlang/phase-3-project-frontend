import MessageCreate from "./MessageCreate"

function MessageRoom(params) {
    
    return (
        <div>
            <h3>Room Name</h3>
            <p>Details</p>
            { /* map the array to create list items */ }
            <MessageCreate />
        </div>
    );
}

export default MessageRoom;