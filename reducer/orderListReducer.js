const OrderListReducer = (state = [], action ) => {
    switch(action.type){
        case "ADD_ORDER" :
            return action.payload;
        default :
            return state;
    }
}

export default OrderListReducer