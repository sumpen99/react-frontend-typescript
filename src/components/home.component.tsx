import { useEffect, useState } from "react";
import {publicContent} from "../services/user.service";
import { IStateContent, initialStateContent, mergeState } from "../functions";
import { Jumbotron } from "./general.components";

const Home:React.FC = ():React.ReactElement => {
    
  const [state,setState] = useState<IStateContent>(initialStateContent);

  useEffect(() =>{
      publicContent()
      .then((response) => { setState(prevState =>{ return mergeState(prevState,{content:response.data})});})
      .catch((error) =>{
        const _content = (error.response && error.response.data) ||
                          error.message ||
                          error.toString();
        setState(prevState => { return mergeState(prevState,{content:_content})});
      });
  },[]);
 
  return (
    <Jumbotron content={state.content}/>
  );
  
}

export default Home;