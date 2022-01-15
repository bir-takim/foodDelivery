
   
import axios from "axios";
import { BASE_API } from '../constants/config';
export const PHONE_CHANGE     = "phone_change";
export const PASSWORD_CHANGE = "password_change";
export const FULL_NAME_CHANGE = "full_name_change";
export const EMAIL_CHANGE = "email_change";
export const BIRTH_DATE_CHANGE = "birth_date_change";
export const SIGN_IN_CLICK        = "sign_in_click";
export const SIGN_UP_CLICK        = "sign_up_click";
export const SIGN_IN_SUCCESS      = "sign_in_success";
export const SIGN_UP_SUCCESS        = "sign_in_success";
export const SIGN_IN_FAILED       = "sign_in_failed";
export const LOG_OUT_SUCCESS     = "log_out_success";
export const LOG_OUT_CLICK    = "log_out_click";
import { Alert} from 'react-native';

export const phoneChange = (value) => {
    return {
        type: PHONE_CHANGE ,
        payload: value
    }
}
export const passwordChange = (value) => {
    return {
        type: PASSWORD_CHANGE,
        payload: value
    }
}
export const fullNameChange = (value) => {
    return {
        type: FULL_NAME_CHANGE,
        payload: value
    }
}
export const emailChange = (value) => {
    return {
        type: EMAIL_CHANGE,
        payload: value
    }
}
export const birthDateChange = (value) => {
    return {
        type: BIRTH_DATE_CHANGE,
        payload: value
    }
}
export const signInClicked = (phone, password) => {
    let data = JSON.stringify({ phone: phone, password: password })
    console.log("data", data);
    return dispatch => {
        dispatch({
            type: SIGN_IN_CLICK,
        })
        axios({
            method: "post",
            url: `${BASE_API}/auth/sign-in`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             data: data
         }).then((result) => {
             console.log("resulltttt",result);
             if(result.status == 200){
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: { data: result.data}
                })
             }
             else{
                Alert.alert(
                    "UYARI",
                    "HATALI KOD VEYA ŞİFRE",
                    [
                     {
                        text: "TAMAM"
                     }
                    ]
                  );
                dispatch({  //dispatch etme işlemi yapılıyor.
                    type: SIGN_IN_FAILED, 
                    payload: { data: result.data}
                })
             }
         }).catch((err) => {
         })
    }
}
export const signUpClicked = (fullName, phone, email, password) => {
    let data = JSON.stringify({fullName: fullName, phone: phone, email: email, password: password })
    console.log("data", data);
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK,
        })
        axios({
            method: "post",
            url: `${BASE_API}/users/sign-up`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             data: data
         }).then((result) => {
             console.log("resulltttt",result);
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: { data: result.data}
                })
         }).catch((err) => {
         })
    }
}