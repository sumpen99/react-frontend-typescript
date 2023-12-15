export const mergeState = <T extends object>(prevState:T, merge:Partial<T>):T =>{
    return { ...prevState, ...merge };
}

export const eventBus = {
    on(event: string, callback: EventListener) {
      document.addEventListener(event, (e) => callback(e));
    },
    dispatch(event: string, data?: any) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event: string, callback: EventListener) {
      document.removeEventListener(event, callback);
    },
};

export type IStateContent = {
  content: string;
}
export const initialStateContent = {
    content: ""
};

export const parseJwt = (token:string):string|null =>{
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

export const parseResponseError = (error:any):string =>{
  let resMessage:string = "";
  try{
    resMessage = (error.response && error.response.data && JSON.parse(error.response.data).message) || 
    error.message || 
    error.toString();
  } 
  catch(_){ resMessage = "Unexpected response from server, please try again"; }
    
  return resMessage;
}

export const parseResponseAccessToken = (response:any):string|null =>{
  try{ return response.data && JSON.parse(response.data).accessToken; } 
  catch(_){ return null;}
} 
  
