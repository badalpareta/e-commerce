import './Contact.css'
import{useContext, useState} from 'react'
import { Strings, langContext} from '../Default'
let Contact=()=>{
    let lang=useContext(langContext)
    let[name,setName]=useState("")
    let[mail,setMail]=useState("")
    return(<div className="contact-page">
        <h2 className='title'>{Strings[lang].contactTitle}</h2>
        <form className="contact-form"action="">
            <label>{Strings[lang].name}</label>
            <input type="text"placeholder={Strings[lang].namePlaceholder} value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor='email'>{Strings[lang].email}</label>
            <input type="email"placeholder={Strings[lang].emailPlaceholder} value={mail} onChange={(e)=>{setMail(e.target.value)}} />
            <label htmlFor="message">{Strings[lang].message}</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type='submit'>{Strings[lang].send}</button>
            </form>
        </div>)
    }
    export default Contact