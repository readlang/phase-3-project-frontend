import React, {useState, useEffect} from "react"

import LogIn from './LogIn';
import RoomSelect from './RoomSelect';
import MessageRoom from './MessageRoom';

function App() {
  const userInitialState = {
    username: "",
    password: "",
    id: 0,
    message: "",
    location: 0
  }

  const [user, setUser] = useState( userInitialState )
  const [roomListData, setRoomListData] = useState([])

  useEffect(() =>{
      fetch("http://localhost:9292/rooms")
      .then(r => r.json())
      .then(d => setRoomListData(d))
  }, [])

  function setLocation(locationID) {
    setUser({...user, location: locationID})
  }

  return (

    <div className="App">
      <h1>Challenge Room</h1>
      { user.message !== "Authorized" ? <LogIn user={user} setUser={setUser} /> : null }
      { user.message === "Authorized" && user.location === 0 ? <RoomSelect user={user} 
        setLocation={setLocation} roomListData={roomListData} setRoomListData={setRoomListData} /> : null }
      { user.message === "Authorized" && user.location !== 0 ? <MessageRoom user={user} 
        room={ roomListData.find(eachRoom => eachRoom.id === user.location) } /> : null }
      
    </div>
  );
}

export default App;
