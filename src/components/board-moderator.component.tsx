import { useEffect, useState } from "react";
import {moderatorBoard} from "../services/user.service";
import { IStateContent, initialStateContent, mergeState } from "../functions";
import { Jumbotron } from "./general.components";



const BoardModerator:React.FC = ():React.ReactElement => {
  
  const [state,setState] = useState<IStateContent>(initialStateContent);

  useEffect(() =>{
    moderatorBoard()
        .then((response)=> { setState(prevState =>{ return mergeState(prevState,{ content: response.data }) }); })
        .catch((error) =>{
            const _content = (error.response && error.response.data && error.response.data.message) ||
                             error.message ||
                             error.toString();
            setState(prevState =>{return mergeState(prevState,{ content:_content })});
        });
    },[]);
   
    return (
        <Jumbotron content={state.content}/>
    );
}

export default BoardModerator;