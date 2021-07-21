export const LogManage = () => {
    return {
        type : 'ADD_LOG',
    }
}

export const LoggedData = (payload) => {
    return {
        type : 'ADD_LOG_DATA',
        payload : payload
    }
}

