
import { useEffect,useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import Item from '../Item'
import'./brands.css'
let Brands=()=>{
    let data=useSelector(state=>state.Reducer.data)
    let [brands,setBrands]=useState([])
    useEffect(()=>{
        let brandSet=new Set();
        data.map((el)=>brandSet.add(el.brand))
        setBrands(Array.from(brandSet))
    },[])
    return(
        <><div className="brands-container">
        {brands.map(el=>{return(<>
                <Link to={`./${el}`}><div className="inner-brands">{el}</div></Link>
                {/* {data.filter(elx=>elx==el).map(item=><li>{item.name}</li>)} */}
                </>
                )
          })
        }</div>
        </>)
}
let SingleBrand=()=>{
    let brand=useParams()
    let data=useSelector(state=>state.Reducer.data)
    let dispatch=useDispatch()
    return(<>{data.filter((el)=>el.brand===brand.brand).map((item)=>{
        return<><Item key={item._id} product={item} addToCart={(el)=>dispatch({type:el.type,item:el.item})} /></>
    })}
    </>)
}
export {SingleBrand}
export default Brands;