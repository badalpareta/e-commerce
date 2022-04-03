import{useState,createContext, useEffect}from'react'
import "./Default.css"
import logo from './media/logo-web-01.jpg'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import{Link} from 'react-router-dom'
let langContext=createContext()

let Strings={
    english:{
        Home:"Home",About:"About",Products:"Products",Brands:"Brands",Contact:"Contact",Search:"Search",Login:"Login",Logout:"Logout",Wishlist:"WishList",Bag:"Bag",AddToCart:"Add to Bag",offer:`Flat ₹400 Off`,code:"Coupon Code:",
        categoryTitle:"Amazing Offers",categorySubTitle:"you can't miss",contactTitle:"Send us a message",name:"Name:",email:"Email:",message:"Message",send:"Send",namePlaceholder:"Your Full Name",emailPlaceholder:"Your email address"
    },
    hindi:{
        Home:"घर",About:"हमारे बारे में",Products:"उत्पाद",Brands:"ब्रांड",Contact:"संपर्क",Search:"खोजें",Login:"लॉग इन",Logout:"लॉग आउट",Wishlist:"इच्छा-सूची",AddToCart:"झोले में डालो",offer:`सीधे  ₹400 की छूट`,code:"कूपन कोड:",
        categoryTitle:"अद्भुत प्रस्ताव",categorySubTitle:"जो भुलाये ना भूले",contactTitle:"हमें संदेश भेजें",name:"नाम:",email:"ईमेल:",message:"संदेश:",send:"भेजें:",namePlaceholder:"आपका पूरा नाम",emailPlaceholder:"आपकी ईमेल आईडी"
    }
}
let DefaultLayout=(props)=>{
    const [lang, setLang] = useState(localStorage.getItem("lang")===null?"english":localStorage.getItem("lang"));
    let[accnt,setAccount]=useState(localStorage.getItem("user")!==null?Strings[lang].Logout:Strings[lang].Login)
    useEffect(()=>{
        localStorage.setItem('lang',lang)
        setAccount(localStorage.getItem("user")!==null?Strings[lang].Logout:Strings[lang].Login)
},[lang])
    return(
        <langContext.Provider value={lang}>
        <header>
        <Link to={'/'}><img src={logo} alt="Ghantees" className="logo"/></Link>
            <div className="main-menu">
                <Link to={'/'}><a className="black">{Strings[lang].Home}</a></Link>
                <Link to={"/about"}><a className="black">{Strings[lang].About}</a></Link>
                <Link to={"/brands"}><a className="black">{Strings[lang].Brands}</a></Link>
                <Link to={"/products"}><a className="black">{Strings[lang].Products}</a></Link>
                <Link to={"/contact"}><a className="black">{Strings[lang].Contact}</a></Link>
            </div>
            <div className="searchbox">
            <i className="search-icon"><SearchIcon/></i>
            <input type='search' className="search-input" placeholder={Strings[lang].Search} /> </div>
            <div className="side-nav">
            <Link to={localStorage.getItem("user")!==null?'/logout':"/login"}><a className="black" onClick={()=>{
                  if(localStorage.getItem("user")!==null)
                  {
                    localStorage.removeItem("user")
                    window.location.href="/"
                  }
                 
            }}>{accnt}</a></Link>
            <Link to={"/wishlist"}><a className="black">{Strings[lang].Wishlist}</a></Link>
            <Link to={"/bag"}><a className='black'>  <i className='bag-icon'><LocalMallOutlinedIcon/></i></a> </Link>
            </div>
        </header>
        <div className="main">
            {props.children}
        </div>
        <footer>
        <select
            name="Lang"
            onChange={(event) => {
              setLang(event.target.value)
            
            }}
            defaultValue={lang}
          >
              <option disabled children="Language"/>
            <option value="english" children="English"/>
            <option value="hindi" children="हिन्दी"/>
          </select>
            &copy;2022 www.ghantees.com. All rights reserved.
        </footer>
        </langContext.Provider>
    )
}
export{langContext,Strings}
export default DefaultLayout 