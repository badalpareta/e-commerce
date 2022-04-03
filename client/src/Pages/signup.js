
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signup.css'
import { useDispatch } from 'react-redux'

let SignUp=()=>{
    const [username,setUser]=useState("")
    const[password,setPass]=useState("")
    const[name,setName]=useState("")
    let [message,setMessage]=useState("")
    let dispatch=useDispatch();
    async function onSubmit(value){
        value.preventDefault();
        try{
          const response=await axios.post('/api/users/signup',{name:name,username:username,password:password})
          setMessage("Signup successful. Login to continue.")
          setTimeout(()=>{
              window.location.href='/login'
          },500)
          }
          catch(e){
              setMessage("Signup unsuccessful. Please try again.")
              console.log(e);
          }
        }
return(<>
 <div className="signup-container">
 <img src="https://gistcdn.githack.com/badalpareta/0c6d1e7adf70373d9ccd04b0bb0514ce/raw/537caeab180453c3f0adce624ba309fa16fcab99/login.svg"/>
        <div className='login'>
             <form onSubmit={onSubmit}>
           <div className="signup-box">
             <h3>Login/Signup</h3>
             
             <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Full Name' className='inputbox' required/>
            
            <input value={username} onChange={e=>setUser(e.target.value)} type="text" placeholder='Username' className='inputbox' required/>
            
            <input value={password} onChange={e=>setPass(e.target.value)} type="password" placeholder='Password' className='inputbox' required/>
            <div className='links'>
            <Link to={'/login'}><a>Already have an Account</a></Link></div>
            <button type='submit' className='btn-02 login-btn'>SignUp</button>
            <p>{message}</p>
            </div>
            </form>
           
        </div>
        </div>
</>)
}
export default SignUp