import { 
    FETCH_CATEGORIES,
    FETCH_RESTAURANTS,
    FETCH_SPECIFIC_RESTAURANTS
    
} from '../actions/mainAction';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    categoriesValue: [],
    restaurantsValue: [],
    selectedRestaurantsValue: []
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
            return {
                ...state,
                categoriesValue: action.payload.data
            }
        case FETCH_RESTAURANTS:
            return {
                ...state,
                restaurantsValue: action.payload.data
            }
        case FETCH_SPECIFIC_RESTAURANTS:
            console.log("reducer logu ");
            return {
                ...state,
                selectedRestaurantsValue: action.payload.data
            }
        default:
            return state
    }
}
export default persistReducer(persistConfig, mainReducer);