import { combineReducers } from "redux";
import mainReducer from './mainReducer';
import authReducer from './authReducer';
import paymentReducer from './paymentReducer';


export default combineReducers({
    mainReducer,
    authReducer,
    paymentReducer
})