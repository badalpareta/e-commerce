import "./Bag.css"
import{useDispatch,useSelector} from 'react-redux'
import{Link} from 'react-router-dom'
import CartItem from "../cartItem"
let Bag=()=>{
    let dispatch=useDispatch()
    let cart=useSelector(state=>state.Reducer.cart)
return(<div className="bag-container">
<div className="checkout-steps">
            <li className="active-step">Cart</li><li className="step-cut"></li>
            <li className="step">Address</li><li className="step-cut"></li>
            <li className="step">Payment</li>
        </div>
      
{cart.length>0?<div className="bag-page">
      <div className="left-container">
       <div className="address-box">
          <div> Deliver to:<strong>Badal Pareta</strong>-302017
           <p>Flat-206,Ruheen Trendz,Jagatapura,Jaipur</p></div>
           <button className="address-btn">Change Address</button>
           </div>
      
        <div className="inner-cart">
            {cart.map((item)=>{
            return (<>
                <CartItem 
                key={item._id} 
                size={item.size}
                id={item._id} 
                url={item.url} 
                brand={item.brand} 
                name={item.name} 
                discPrice={item.discPrice} 
                origPrice={item.origPrice} 
                discPercentage={item.discPercentage} 
                qty={item.qty} 
                dispatch={()=>{dispatch({type:"REMOVE_FROM_CART",idx:item._id})}} />
            </>)
        })}
    </div>
</div>
<div className="right-container">
    <div className="promotion">
<span>Offers&Coupons</span>
<div>
<input type="text" placeholder="Apply Code" />
<button>Apply</button>
</div>

    </div>
    <div className="bag-value">
            <span>Product Details ({cart.length} {cart.length>1?"items":"item"})</span>
            <div className="bag-price">
                <span>Actual Price:</span><span className="right-price">&#x20B9;{cart.reduce((prevTotal,price)=>prevTotal+(price.qty*price.origPrice),0)}</span>
                <span>Discounted Price:</span><span className="right-price">&#x20B9;{cart.reduce((prevTotal,price)=>prevTotal+(price.qty*price.discPrice),0)}</span>
                <span>Discount:</span><span className="right-price">{}</span>
                <hr className="line-break"/>
                <span><strong>Total:</strong></span><span className="right-price">&#x20B9;{cart.reduce((prevTotal,price)=>prevTotal+(price.qty*price.discPrice),0)}</span>
            </div>
    </div>
</div>
   </div>:<div className="empty-container"><div className="empty-wishlist">
            Your Cart is Empty</div>
            <div className="empty-info">Add items that you like to your cart. You can checkout the products after that.</div>
            <Link to="/products"><button>Products</button></Link>
            </div>}

   </div>
)
}
export default Bag