
function LogIn({ user, setUser }) {
    function signIn() {
        fetch(`http://localhost:9292/login/${user.username}/${user.password}`)
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
        <div>
            <h3>Log In</h3>
            <form>
                <input type="text" name="username" placeholder="Username" 
                    value={user.username} 
                    onChange={(e) => setUser({...user, username:e.target.value })} />
                <br/>
                <input type="text" name="password" placeholder="Password" 
                    value={user.password} 
                    onChange={(e) => setUser({...user, password:e.target.value })} />
            </form>
            <br/>
            <button onClick={signIn} >Existing User Sign In</button>
            <br/> 
            <button onClick={signUp} >New User Sign Up</button>
        </div>
    );
}

export default LogIn;