import React , { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom";

import './Register.css';


const Register = () => {

    const history = useHistory();

    const [ user , setUser ] = useState({
        name : "",
        email : "",
        password : "",
        reEnterPassword : ""
    })
    
    const handleChange = (e) => {
    
        const { name , value } = e.target
        setUser({
            ...user ,
            [name] : value 
        })
    }
    

    const register = () => {

        const { name , email , password , reEnterPassword } = user

        if(name && email && password && (password===reEnterPassword)){
           //alert("saved") 
            axios.post("http://localhost:3005/register" , user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        }
        else{
            alert("invalid")
        }
    }
    return(          
        <>
        <div className='register'> 
                 <h1>Register</h1>
                 <input type="text" name = "name" value = {user.name} placeholder = "Your Name" onChange = {handleChange}></input><br />
                 <input type="text" name = "email" value = {user.email} placeholder = "Your Email-id" onChange = {handleChange}></input><br />
                 <input type="password" name = "password" value = {user.password} placeholder = "Password" onChange = {handleChange}></input><br />
                 <input type="password" name = "reEnterPassword" value = {user.reEnterPassword} placeholder = "Re-enter Password" onChange = {handleChange}></input><br />
                 <div className = "button" onClick = {register}>Register</div> 
                 <div>Or</div>
                 <div className = "button" onClick={() => history.push("/login")}>Login</div> 
            </div> 
        </>
    );
}

export default Register;