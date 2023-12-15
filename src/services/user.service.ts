import axios from "axios";
import authHeader from "./auth-header";
import DB from "./server.url"

/*userBoard():Promise<any>|undefined{ return undefined;}*/


    
const publicContent = () : Promise<any> =>{
    return axios.get(`${DB.API_URL_ALL_NOTES}`,DB.APP_ACCESS_KEY_HEADER); 
}

const userBoard = ():Promise<any> =>{
    return axios.get(`${DB.API_URL_ALL_NOTES}`,{ headers:authHeader() });
}

const moderatorBoard = ():Promise<any> =>{
    return axios.get(`${DB.API_URL_ALL_NOTES}`,{headers:authHeader()});
}

const adminBoard = ():Promise<any> =>{
    return axios.get(`${DB.API_URL_ALL_NOTES}`,{headers:authHeader()});
}


export {
    publicContent,
    userBoard,
    moderatorBoard,
    adminBoard
}

