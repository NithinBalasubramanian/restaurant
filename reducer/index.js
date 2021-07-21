import LogManage from './LogManageReducer';
import orderList from './orderListReducer';
import LoggedData from './LoggedDataReducer'

import { combineReducers } from 'redux'


const AllReducer = combineReducers({
    'LogState' : LogManage,
    'OrderList' : orderList,
    'LoggedData' : LoggedData,
})

export default  AllReducer