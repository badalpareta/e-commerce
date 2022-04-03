
let initialData={
    cart:[],data:[],product:[],wishlist:[]
}
 let Reducer=(state=initialData,action)=>{
switch(action.type)
{   

    case "ADD_TO_CART":{
        {
        return{cart:[...state.cart,{...action.item}],
            data:[...state.data],
            product:[...state.product],
            wishlist:[...state.wishlist]}
            
        }
    }

    case "MOVE_TO_CART":{
        return{
            cart:[...state.cart,{...action.item,qty:1}],
            data:[...state.data],
            product:[...state.product],
            wishlist:state.wishlist.filter((item)=>item._id!==action.item._id),

        }
    }
    case "REMOVE_FROM_CART":{
        return{
        cart:state.cart.filter((item)=>item._id!==action.idx),
        data:[...state.data],
        product:[...state.product],
        wishlist:[...state.wishlist]}
        }
    case "INITIALIZE_PRODUCTS":{
        return{
        cart:[...state.cart],
        data:action.result, 
        product:[...state.product],
        wishlist:[...state.wishlist]}
       
        }
    case "INCREASE":{
        return{
        cart:[...state.cart],
        data:[...state.data],
        product:[...state.product],
        wishlist:[...state.wishlist]}
        }
case "DECREASE":{
    return{
        cart:[...state.cart],
        data:[...state.data], 
        product:[...state.product],
        wishlist:[...state.wishlist]}
        }
       
 case "SHOW_PRODUCT":{
     return{
     cart:[...state.cart],
     data:[...state.data],
     product:state.data.filter((item)=>item._id===action._id),
     wishlist:[...state.wishlist]}
    }
    case "CLEAR_PRODUCT":{
        return{
            cart:[...state.cart],
            data:[...state.data],
            product:[],
            wishlist:[...state.wishlist]
        }
    }
     case"ADD_TO_WISHLIST":{
         return{
             cart:[...state.cart],
             data:[...state.data],
             product:[...state.product],
             wishlist:state.wishlist.filter((el)=>el._id===action.item._id).length!==0?[...state.wishlist]:[...state.wishlist,action.item]
         }
     }

default:{
    return state;}
}
}

export default Reducer