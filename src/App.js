import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
// uses react-router-dom@5 (version 5) to use switch
import NavBar from "./NavBar";
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
      <header><NavBar /> </header>
      

      <Switch>
        <Route exact path="/">  
          { user.message !== "Authorized" ? 
            <LogIn user={user} setUser={setUser} /> : 
            <RoomSelect user={user} setLocation={setLocation} roomListData={roomListData} setRoomListData={setRoomListData}/> 
          }
        </Route>

        <Route path="/room">
          { user.message === "Authorized" && user.location !== 0 ? <MessageRoom user={user} 
            room={ roomListData.find(eachRoom => eachRoom.id === user.location) } /> : null 
          }
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
