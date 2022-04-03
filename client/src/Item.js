import { useContext, useState } from 'react';
import {langContext,Strings} from './Default'
import './Item.css'
import{Link} from 'react-router-dom'

function Item(props) {
  let lang=useContext(langContext)
  let [imgurl,setImgurl]=useState(props.product.url)
      return (
    <div className="App">
       
      <div className="item-container">
      <Link to={`/products/${props.product._id}`}>
      <img src={imgurl} onMouseOver={()=>props.product.url2!==""?setImgurl(props.product.url2):null} onMouseOut={()=>setImgurl(props.product.url)} alt={props.product.name}/></Link>
      <div className="add-to-cart">
        <button className='cart-button' onClick={()=>{
          props.addToCart({type:"ADD_TO_CART",item:{...props.product,qty:1}})
        }}>{Strings[lang].AddToCart}</button>
      </div>
      <div className="details">
      <h3 className="product-brand">{props.product.brand}</h3>
      <h4 className="product-name">{props.product.name}</h4>
      <div className="product-price">
      <span className='discounted-price'>&#x20B9;{props.product.discPrice}</span><span className='striked-price'>&#x20B9;{props.product.origPrice}</span>
      <span className='discount-percent'>{100-Math.round((props.product.discPrice/props.product.origPrice)*100)}%OFF</span>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Item;
