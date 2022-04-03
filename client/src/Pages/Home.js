import {HomeSlider} from '../Slider'
import {Trending} from './Products'
import { useContext } from 'react'
import {langContext,Strings} from '../Default'

let Discount=()=>{
    let lang=useContext(langContext)
    return(<><div className="promo-offer-container">
     <div className="offer">{Strings[lang].offer}</div>
    {Strings[lang].code}<div className="code">ghantees2022</div>
        </div></>)
}
let Home=()=>{
    return(
        <><HomeSlider/>
         <Trending/><Discount/>
        </>
    )
}
export default Home