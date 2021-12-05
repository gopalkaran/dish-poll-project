import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../css/Nav.module.css';

const Nav = () => {
    const history = useHistory();
    const linkStyle = {
       color : '#444',
       textDecoration : 'none'
    }

    const signOut = () =>{
       localStorage.removeItem('loggedUser')
      //  localStorage.removeItem('dishes')
      //  localStorage.removeItem('users')


       history.push("/")
    }
    
    return (
        <nav>
           <ul>
               <li id={window.location.pathname === '/dashboard' ? styles.active : ""}><Link style={linkStyle} to='/dashboard'>DishList</Link></li>
               <li id={window.location.pathname === '/polllist' ? styles.active : ""}><Link style={linkStyle} to='/polllist'>PollList</Link></li>
               <li id={window.location.pathname === '/' ? styles.active : ""} onClick={signOut}>Sign Out</li>
           </ul>
            
        </nav>
    )
}

export default Nav