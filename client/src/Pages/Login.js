import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import'./Login.css'

import {Link} from 'react-router-dom'
let Login=()=>{
    const [username,setUser]=useState("")
    const[password,setPass]=useState("")
    let [message,setMessage]=useState("")
    const dispatch=useDispatch();
    async function onSubmit(value){
    value.preventDefault();
    try{
        const response=await axios.post('/api/users/login',{username:username,password:password})
        localStorage.setItem('user',JSON.stringify(response.data))
        setMessage("Login Successful")
        setTimeout(()=>{
            window.location.href='/products'
        },1000)
        }
        catch(e){
            setMessage("Login Unsuccessful.Try Again.")
            console.log(e);
        }
    }
return(<>
    <div className="login-container">
        {/* <object type="image/svg+xml" id="login-img"data={LoginImage}/> */}
        <img src="https://gistcdn.githack.com/badalpareta/0c6d1e7adf70373d9ccd04b0bb0514ce/raw/537caeab180453c3f0adce624ba309fa16fcab99/login.svg"/>
        <div className='login'>
             <form onSubmit={onSubmit}>
           <div className="login-box">
             <h3>Login/Signup</h3>
            <input value={username} onChange={e=>setUser(e.target.value)} type="text" placeholder='Username' className='inputbox' required/>
            <input value={password} onChange={e=>setPass(e.target.value)} type="password" placeholder='Password' className='inputbox' required/>
            <div className='links'><a href="">Forgot Password</a>
            <Link to={'/signup'}><a>Create a new Account</a></Link></div>
            <button className='btn-02 login-btn' type="submit">Login</button>
            <p>{message}</p>
            </div>
            </form>
           
        </div>
        </div>
    </>)
}

export default Login