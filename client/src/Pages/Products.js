import './Products.css'
import axios from 'axios';
import { useEffect,useContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {langContext,Strings} from '../Default'
import { useParams } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import Item from '../Item'

let Trending=()=>{
    let data=useSelector(state=>state.Reducer.data.slice(0,6))
    let dispatch=useDispatch()
    let lang=useContext(langContext)
   useEffect(()=>{
       async function intialize(){
           let products=await axios.get('/productsListing')
       dispatch({type:"INITIALIZE_PRODUCTS",result:products.data})
       
       }intialize()
   }
,[])
return(<><div className="products-container">
<div>
    <div className="page-title">
        <h1 className="product-category">{Strings[lang].categoryTitle}</h1>
        <h5 className="product-category-subtitle">{Strings[lang].categorySubTitle}</h5>
    </div>
    <div className="main-container">
    {data.map((item)=>
        <Item key={item.id} product={item} addToCart={(el)=>dispatch({type:el.type,item:el.item})}/>)}
     </div>
</div>
</div></>)
}

let Products=()=>{
    let lang=useContext(langContext)
    let data=useSelector(state=>state.Reducer.data)
    let dispatch=useDispatch()

   useEffect(()=>{
       async function intialize(){
        let products=await axios.get('/productsListing')
        await dispatch({type:"INITIALIZE_PRODUCTS",result:products.data})
       }intialize()
   }
,[])

    return(<div className="products-container">
    <div>
        <div className="page-title">
            <h1 className="product-category">Men T-shirts</h1>
            <h5 className="product-category-subtitle">Casual printed</h5>
        </div>
        <div className="left-container">
        {
           
         data.map((item)=>
            <Item key={item._id} product={item} addToCart={(el)=>dispatch({type:el.type,item:el.item})}/>)
            }

         </div>
    </div>
    </div>)
}

let SingleProduct=()=>{
    let {_id}=useParams();
    let product=useSelector(state=>state.Reducer.product)
    let[size,selectSize]=useState(null)
    let[error,setError]=useState("")
    let dispatch=useDispatch()
    let handleCart=(el)=>{
        if(size==null)
        {
        setError("BEFORE ADDING SELECT SIZE")
        }
        else
        {
            setError("ADDED TO BAG")
            dispatch({type:"ADD_TO_CART",item:{...el,size,qty:1}})
        }
    }
    useEffect(()=>{
        
        async function show(){
            dispatch({type:"SHOW_PRODUCT",_id:_id})
        }
        show()
        return (()=>dispatch({type:"CLEAR_PRODUCT"}))
    },[])
    return(<><div className="single-product-container">
        {product.map((el)=><><div className="carousel">
        <img id="prod-image"src={el.url} />
            </div>
            <div className="product-desc">
                <h1>{el.brand}</h1>
                <h2>{el.name}</h2>
                <div className="product-price">
                    <h3 className='discount-price'>&#x20B9;{el.discPrice}</h3><h3 className='strike-price'>&#x20B9;{el.origPrice}</h3>
                    <span className='discount'>({100-Math.round((el.discPrice/el.origPrice)*100)}%OFF)</span>
                </div>
                <p className='inc'>inclusive of all taxes</p>
                <div className="sizechart">
                    <p>select size</p>
                    <button id={size!=='XS'?'size':'size-active'}onClick={()=>selectSize("XS")}>XS</button>
                    <button id={size!=='S'?'size':'size-active'}onClick={()=>selectSize("S")}>S</button>
                    <button id={size!=='M'?'size':'size-active'}onClick={()=>selectSize("M")}>M</button>
                    <button id={size!=='L'?'size':'size-active'}onClick={()=>selectSize("L")}>L</button>
                </div>
                <span>{error}</span>
                <div className="main-buttons">
                    <button className='add-btn' onClick={()=>handleCart(el)}>ADD TO BAG</button>
                    <button  className='search-btn' onClick={()=>dispatch({type:"ADD_TO_WISHLIST",item:{...el,wishList:true}})} ><i><FavoriteBorderOutlinedIcon/></i></button></div>
                </div>
                
               </>
               
        )}
        <div className="separator"><hr /></div>    
         <div className="bottom-part">
             <h4>Description:</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas nihil omnis sequi beatae. Voluptas cum voluptatem fugiat fuga omnis aut facilis veritatis placeat, eveniet amet praesentium nobis incidunt maxime eos, at nulla quod commodi sit! Distinctio veritatis, omnis nihil quisquam ex corporis mollitia autem possimus amet optio dicta laudantium!</p></div>

      </div>
     </>)
}
export default Products
export{Trending,SingleProduct}