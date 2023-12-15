import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Path from "../services/server.url";
import { parseJwt } from "../functions";

type AuthProps = {
    logout: () => void
}

const AuthVerify:React.FC<AuthProps> = ({logout}):React.ReactElement =>{
    let location = useLocation();

    useEffect(() =>{
        const _user = localStorage.getItem(Path.USER_PATH);
        const user = JSON.parse(_user ?? "");
        if(user){
            const decodedJwt = parseJwt(user.accessToken);
            if(decodedJwt){
                logout();
            }
            /*if(decodedJwt && decodedJwt.exp * 1000 < Date.now()){
                logout();
            }*/
        }
    },[location,logout]);
    return(
        <></>
    );
}

export default AuthVerify;