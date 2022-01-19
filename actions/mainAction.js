import axios from 'axios';
import { BASE_API } from '../constants/config';
export const FETCH_CATEGORIES    = "fetch_categories";
export const FETCH_RESTAURANTS    = "fetch_restaurants";
export const FETCH_SPECIFIC_RESTAURANTS    = "fetch_specific_restaurants";
export const ADD_FAVOURITES   = "add_favourites";
export const FAVOURITES_SUCCESS   = "favourites_success";
export const GET_FAVOURITES   = "get_favourites";


export const fetchCategories = () => {
    return dispatch => {
        axios({
            url: `${BASE_API}/restaurant/all-categories`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: result.data
            })      
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
export const fetchRestaurants = () => {
    console.log("action calıstı");
    return dispatch => {
        axios({
            url: `${BASE_API}/restaurant/all-restaurants`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_RESTAURANTS,
                payload: result.data
            })      
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
export const fetchSpecificRestaurants = (catId) => {
    console.log("action calıstı", catId);
    return dispatch => {
        axios({
            url: `${BASE_API}/restaurant/category-restaurants/${catId}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("result geldi yavrum", result);
            dispatch({
                type: FETCH_SPECIFIC_RESTAURANTS,
                payload: result.data
            })      
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
export const addFavourites = (user_id, restaurant_id) => {
    let data = JSON.stringify({user_id:user_id, restaurant_id:restaurant_id })
    console.log("data fav", data);
    return dispatch => {
        dispatch({
            type: ADD_FAVOURITES,
        })
        axios({
            method: "post",
            url: `${BASE_API}/common/add-fav`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             data: data
         }).then((result) => {
             console.log("resulltttt favvvv",result);
                dispatch({
                    type: FAVOURITES_SUCCESS,
                    payload: { data: result.data}
                })
         }).catch((err) => {
             console.log("err", err);
         })
    }
}
export const fetchFavourites = (userId) => {
    console.log("action calıstı favoriii", userId);
    return dispatch => {
        axios({
            url: `${BASE_API}/common/users-favs/${userId}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            console.log("result geldi favorilerrrrr");
            dispatch({
                type: GET_FAVOURITES,
                payload: result.data
            })      
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
// export const fetchRestaurant = () => {
//     console.log("action calıstı");
//     return dispatch => {
//         axios({
//             url: `${BASE_API}/product/products-cat/:catId`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }).then((result) => {
//             dispatch({
//                 type: FETCH_RESTAURANTS,
//                 payload: result.data
//             })      
//         }).catch((err) => {
//             console.log(err.response)
//         })
//     }
// }