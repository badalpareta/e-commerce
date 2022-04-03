import './cartItem.css'
export default (props)=>{

return(
<div className="cart-container">
<img src={props.url} alt=""/>
<div className="cart-product-details">
<h3 className="product-brand">{props.brand}</h3>
<h4 className="product-name">{props.name}</h4>
<div className="bottom-container"><p className="sizes">Size</p><select value={props.size} className="sizes">
<option name="" id="">XS</option>
<option name="" id="">S</option>
<option name="" id="">M</option>
<option name="" id="">L</option>
</select>
<p className="sizes">Qty</p><select value={props.qty} onChange={()=>{}}className="sizes">
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
</select></div>
<button className="rem-btn" onClick={()=>props.dispatch()}>X</button>
<div className="product-price">
<span className='discounted-price'>&#x20B9;<strong>{props.discPrice}</strong></span><span className='striked-price'>Rs.{props.origPrice}</span>
<span className='discount-percent'>{props.discPercentage}</span>

</div>
</div>
</div>)}