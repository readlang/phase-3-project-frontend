

function RoomCreate() {

    return (
        <div>
            <h4>Create Room</h4>
            <form>
                <label>Name </label>
                <input type="text" name="Name"></input>
                <br/>
                <label>Details </label>
                <input type="text" name="Details"></input>
                <br/>
                <input type="submit"></input>

            </form>
        </div>
    );
}

export default RoomCreate;