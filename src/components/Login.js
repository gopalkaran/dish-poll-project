import React, {useState} from 'react'
import users from '../userdb/users.json';
import { useHistory } from "react-router-dom";


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
        users.forEach(user => {
            if(user.username === userCredential.username && user.password === userCredential.password){
                history.push("/dashboard");
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username" onChange={onChangeHandler} />
                <input type="password" name="password" onChange={onChangeHandler} />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login
