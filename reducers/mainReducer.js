import { 
    FETCH_CATEGORIES,
    FETCH_RESTAURANTS,
    FETCH_SPECIFIC_RESTAURANTS,
    ADD_FAVOURITES,
    FAVOURITES_SUCCESS,
    GET_FAVOURITES
    
} from '../actions/mainAction';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    categoriesValue: [],
    restaurantsValue: [],
    selectedRestaurantsValue: [],
    favouriteRestaurants:[],
    // isFavourite: false
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
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
            action.payload.data.map((item)=>{
                item.isFavourite = false
            })
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
        case ADD_FAVOURITES:
            return {
                ...state,
            }
        case GET_FAVOURITES:
            console.log("reducerdan geliyor");
            return {
                ...state,
                favouriteRestaurants: action.payload.data
            }
        default:
            return state
    }
}
export default persistReducer(persistConfig, mainReducer);