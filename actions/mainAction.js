import axios from 'axios';
import { BASE_API } from '../constants/config';

export const FETCH_CATEGORIES    = "fetch_categories";
export const FETCH_RESTAURANTS    = "fetch_restaurants";

export const fetchCategories = () => {
    console.log("action calıstı");
    return dispatch => {
        axios({
            url: `${BASE_API}/product/categories`,
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