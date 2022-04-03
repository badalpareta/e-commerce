let CartOperations=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":{
                return{cart:[...state.cart,{...action.item,qty:1}],
                    data:[...state.data]}
            }
        case "REMOVE_FROM_CART":{
            return{
                cart:state.cart.filter((item)=>item.id!==action.idx)
                ,data:[...state.data]}
                }
        case "INITIALIZE_PRODUCTS":{
            return{
                cart:[...state.cart],
                data:action.result
            }
        }
        case "INCREASE":{
            return{
                cart:[...state.cart],
                data:[...state.data]
            }
        }
        case "DECREASE":{
            return{
                cart:[...state.cart],
                data:[...state.data]
            }
        }
        default:{
            return state;}
    }
}
export default CartOperations