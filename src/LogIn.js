import React, {useState} from "react";

function LogIn(params) {
    // useState goes here

    return (
        <div>
            <h3>Log In</h3>
            <form>
                <label>Username </label>
                <input type="text" name="username"></input>
                <br/>
                <label>Password </label>
                <input type="text" name="password"></input>
            </form>
            <br/>
            <button>Sign In</button>
            <br/> 
            <button>New User Sign Up</button>
        </div>
    );
}

export default LogIn;