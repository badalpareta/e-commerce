import "./wishlist.css"
import{useDispatch,useSelector} from 'react-redux'
import CartItem from "../cartItem"
import { Link } from "react-router-dom"
let Wishlist=()=>{
    let dispatch=useDispatch()
    let wishlist=useSelector(state=>state.Reducer.wishlist)
return(<div className="bag-container">
<div className="bag-page">
      <div className="left-container">
        <div className="">
           {wishlist.length>0?wishlist.map((item)=>{
            return (<>
                <CartItem 
                key={item._id} 
                id={item._id} 
                url={item.url} 
                brand={item.brand} 
                name={item.name} 
                discPrice={item.discPrice} 
                origPrice={item.origPrice} 
                discPercentage={item.discPercentage} 
                qty={item.qty} 
                dispatch={()=>{dispatch({type:"MOVE_TO_CART",item:item})}} />
            </>)
        }):<div className="empty-container"><div className="empty-wishlist">
            Your WishList is Empty</div>
            <div className="empty-info">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
            <Link to="/products"><button>Products</button></Link>
            </div>}
    </div>
</div>
   </div>
    </div>)
}
export default Wishlist