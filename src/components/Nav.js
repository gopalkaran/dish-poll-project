import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Nav.module.css';

const Nav = () => {
    const history = useHistory();
    const linkStyle = {
       color : 'white',
       textDecoration : 'none'
    }

    const signOut = () =>{
       localStorage.removeItem('loggedUser')
       history.push("/")
    }
    
    return (
        <nav>
           <ul>
               <li><Link style={linkStyle} to='/dashboard'>DishList</Link></li>
               <li><Link style={linkStyle} to='/polllist'>PollList</Link></li>
               <li onClick={signOut}>Sign Out</li>
           </ul>
            
        </nav>
    )
}

export default Nav