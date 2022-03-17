import React, {useState} from "react"

import LogIn from './LogIn';
import RoomSelect from './RoomSelect';
import MessageRoom from './MessageRoom';

function App() {
  const userInitialState = {
    username: "",
    password: "",
    id: 0,
    message: ""
  }

  const [user, setUser] = useState( userInitialState )



  return (

    <div className="App">
      <h1>Challenge Room</h1>
      { user.message !== "Authorized" ? <LogIn user={user} setUser={setUser} /> : null }
      
      { user.message === "Authorized" ? <RoomSelect user={user} /> : null }
      
      <MessageRoom />




    </div>
  );
}

export default App;
