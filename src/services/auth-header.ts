import PATH from "./server.url"
const authHeader = () =>{
    const userStr = localStorage.getItem(PATH.USER_PATH);
    let user;
    if(userStr){ user = JSON.parse(userStr); }
    if(user && user.accessToken){ 
        return { Authorization: `${PATH.BEARER}${user.accessToken}` }; // Spring Boot
        //return {"x-access-token":user.accesstoken}; Node Express
    }
    return { Authorization: "" }; // Spring Boot
    //return {"x-access-token":null}; Node Express

}

export default authHeader;