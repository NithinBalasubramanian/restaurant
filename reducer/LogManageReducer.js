const LogManageReducer = (state = 1, action) => {

    switch(action.type){

        case "ADD_LOG":
            return state = 0;
        default :
            return state;
    }

}

export default LogManageReducer