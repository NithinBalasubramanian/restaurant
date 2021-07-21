const LoggedData = (state = [{'id' : 1}], action) => {

    switch(action.type){

        case "ADD_LOG_DATA":
            return state;
        default :
            return state;
    }

}

export default LoggedData