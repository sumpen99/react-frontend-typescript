import axios from "axios";
import DB from "./server.url"
import { parseResponseAccessToken } from "../functions";



const loginUser = async (username:String,password:String):Promise<any> =>{
    const data = {
        username:username,
        password:password
    };
    return axios
    .post(`${DB.API_URL}/login`,data,DB.APP_ACCESS_KEY_HEADER)
    .then((response) =>{
        if(parseResponseAccessToken(response)){ localStorage.setItem(DB.USER_PATH,response.data); }
        return response.data;
    });
}

const logoutUser = ():void =>{
    localStorage.removeItem(DB.USER_PATH);
}

const registerUser = async (username:string,email:string,password:string,firstname:string,lastname:string):Promise<any> =>{
    const data = {
        username:username,
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    }
    return axios.post(`${DB.API_URL}/signup`,data,DB.APP_ACCESS_KEY_HEADER);
}

const getCurrentUser = ():any =>{
    const userStr = localStorage.getItem(DB.USER_PATH);
    return userStr ? JSON.parse(userStr) : null;
}


export {
    loginUser,
    logoutUser,
    registerUser,
    getCurrentUser
};