import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import styles from "../css/Login.module.css"


const Login = () => {
    const history = useHistory();

    const [userCredential, setUserCredential] = useState({
        username : '',
        password : ''
    })
    const onChangeHandler = (e) => {
        setUserCredential({...userCredential, [e.target.name]: e.target.value})
    }



    const onSubmitHandler = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
        users.forEach(user => {
            if(user.username === userCredential.username && user.password === userCredential.password){
                localStorage.setItem('loggedUser', JSON.stringify(user));
                history.push("/dashboard");
            }
        })
    }
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <h1>Login</h1>
                <input type="text" name="username" onChange={onChangeHandler} />
                <input type="password" name="password" onChange={onChangeHandler} />
                <input type='submit' value='Login' className={styles.btn} />
            </form>
        </div>
    )
}

export default Login
