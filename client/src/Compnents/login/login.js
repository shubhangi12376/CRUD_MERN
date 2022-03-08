import React , { useState } from 'react';
import './login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Login = ( {setloginuser} ) => {

    const history = useHistory();

    const [ user , setUser ] = useState({
        email : "",
        password : "",
    })
    
    const handleChange = (e) => {
    
        const { name , value } = e.target
        setUser({
            ...user ,
            [name] : value 
        })
    }

    const login = () => {
            axios.post("http://localhost:3005/login" , user)
            .then( res => {
                alert(res.data.message)
                setloginuser(res.data.user)
                history.push("/")
           })
    }


    return(
        <>
            <div className='login'>  
                 <h1>Login</h1>
                 <input type="text" name = "email" value = {user.email} placeholder = "Enter your email-id" onChange={handleChange}></input><br />
                 <input type="password" name = "password" value={user.password} placeholder = "Password" onChange={handleChange}></input><br />
                 <div className = "button" onClick={login}>Login</div> 
                 <div>Or</div>
                 <div className = "button" onClick={() => history.push("/register")}>Register</div> 
            </div>     
        </>
    );
}

export default Login;