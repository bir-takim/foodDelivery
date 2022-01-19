import{
    PHONE_CHANGE,
    PASSWORD_CHANGE,
    FULL_NAME_CHANGE,
    EMAIL_CHANGE,
    BIRTH_DATE_CHANGE,
    SIGN_IN_CLICK,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    SIGN_UP_CLICK,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
} from '../actions/authAction'
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    phoneValue: "",
    passwordValue: "",
    fullNameValue: "",
    emailValue: "",
    idValue: "",
    userData:"",
    isAuthLogin: false,
    isMainLogin: null,
    authSpinnerStatus: false,
    authButtonSpinner: false,
    logInErrorValue:"",
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['userData','isMainLogin','isAuthLogin'],
    blacklist: ['authButtonSpinner', 'authSpinnerStatus'] // only navigation will be persisted
};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PHONE_CHANGE:
            return{
                ...state,
                phoneValue: action.payload
            }
        case PASSWORD_CHANGE:
            return{
                ...state,
                passwordValue: action.payload
            }
        case FULL_NAME_CHANGE:
            return{
                ...state,
                fullNameValue: action.payload
            }
        case EMAIL_CHANGE:
            return{
                ...state,
                emailValue: action.payload
            }
        case SIGN_IN_CLICK:
            return{
                ...state,
            }
        case SIGN_IN_SUCCESS:
            console.log("loggg", action.payload.data);
            return {
                ...state,
                userData: action.payload.data,
                isMainLogin: true
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
                isMainLogin: false
            }
        case SIGN_UP_CLICK:
            return {
                ...state,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
            }
        case SIGN_UP_FAILED:
            return {
                ...state
            }
            default:
                return state;
        }
    }
export default persistReducer(persistConfig, authReducer);