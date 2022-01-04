import { 
    FETCH_CATEGORIES,
    
} from '../actions/mainAction';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    categoriesValue: [],
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: [ 'userToken']
    // whitelist: ['isAuthLogin', 'isMainLogin', 'userData'],
    // blacklist: ["authButtonSpinner", "authSpinnerStatus"] // only navigation will be persisted
};
const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            console.log("reducer logu ");
            return {
                ...state,
                categoriesValue: action.payload.data.data
            }
        default:
            return state
    }
}
export default persistReducer(persistConfig, mainReducer);