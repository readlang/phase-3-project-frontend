import React from 'react';
import {Link} from 'react-router-dom'

function NavBar({user, logOut}) {
    
    return(
        <div id='navbar'>

            <Link id='link'  to='/' >
            Rooms
            </Link>

            { user.message !== "Authorized" ? null : 
                <div id='login'>
                    <span>Hi {user.username}&ensp;</span>
                    <button onClick={logOut} >Logout </button>
                </div>
            }
        </div>
    )
}

export default NavBar;