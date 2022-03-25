
function LogIn({ user, setUser }) {
    
    function signIn() {
        fetch("http://localhost:9292/login", {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({username: user.username, password: user.password})
        })
        .then(r => r.json())
        .then(d => setUser({...user, id: d.id, message: d.message}) )
    }

    function signUp() {
        fetch("http://localhost:9292/signup", {
            method: "POST",
            headers: {"content-type": "application/json" },
            body: JSON.stringify({username: user.username, password: user.password})
        })
        .then(r => r.json())
        .then(d => setUser({...user, id: d.id, message: d.message}))
    }

    return (
        <div id="login">
            <h3>Log In</h3>
            <form>
                <input type="text" name="username" placeholder="Username" 
                    value={user.username} 
                    onChange={(e) => setUser({...user, username:e.target.value })} />
                <br/>
                <input type="password" name="password" placeholder="Password" 
                    value={user.password} 
                    onChange={(e) => setUser({...user, password:e.target.value })} />
            </form>
            
            {user.message ? <p>{user.message}</p> : <br/>  }
            
            <button id="login-button" onClick={signIn} > Log In </button>
            <br/> 
            <button id="signup-button" onClick={signUp} > Sign Up </button>
        </div>
    );
}

export default LogIn;