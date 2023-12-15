import { useState, useEffect } from 'react'
import { Navigate  } from "react-router-dom";
import {getCurrentUser} from "../../services/auth.service";
import { mergeState } from '../../functions';
import IUser from "../../types/user.type";
import "../../sass/profile/_profile.component.scss";
import { ProfileFeeds } from './profile.feeds.component';
import { ProfileUserInfo } from './profile.user.info.component';

type IState = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string }
}

const initialState = {
  redirect: null,
  userReady: false,
  currentUser: { accessToken: "" }
};

const Profile:React.FC = ():React.ReactElement => {
      
  const [state,setState] = useState<IState>(initialState)

  const handleFollowUser = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{ e.preventDefault();}

  useEffect(() =>{
      const currentUser = getCurrentUser();

      if(!currentUser){ setState(prevState =>{ return mergeState(prevState,{redirect:"/home"});});}
      else{ setState(prevState =>{ return mergeState(prevState,{ currentUser: currentUser, userReady: true });});}
  },[]);

  if(state.redirect) { return <Navigate to={state.redirect} />}
  return (
    <div className="MainProfileDiv">
      <div className="profile-container">
        <div className="top-portion">
          <div className="user-profile-bg-image">
            <img id='prf-bg-img' src='' alt='' srcSet=''/>
          </div>
          <div className='user-profile-img'>
            <img id='prf-img' src='' alt='' srcSet=''/>
          </div>
          <div className="username">
            {state.currentUser.username ?? "username"}
          </div>
          <div className="follow-user">
            <a onClick={handleFollowUser}>+ Follow</a>
          </div>
        </div>
        <div className="bottom-portion">
          <div className='left-side'>
            <ProfileFeeds currentUser={state.currentUser}/>
          </div>
          <div className='right-side'>
            <ProfileUserInfo currentUser={state.currentUser}/>
          </div>
        </div>
      {/*(state.userReady) ? <UserField/> : null*/}

      </div>
    </div>
  );
  
}

export default Profile;