import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css"

import 'bootstrap/dist/css/bootstrap.css';
import './sass/_main.scss';
import './sass/index.scss';

import { logoutUser, getCurrentUser } from './services/auth.service';
import IUser from './types/user.type';
import Login from './components/login.component';
import Register from './components/register.component';
import Home from './components/home.component';
import Profile from './components/profile/profile.component';
import BoardUser from './components/board-user.component';
import BoardModerator from './components/board-moderator.component';
import BoardAdmin from './components/board-admin.component';
import {
  ModeratorBoard,
  AdminBoard,
  CurrentUser,
  UserProfile,
  LogIn,
  SignUp,
} from './components/general.components';
import { eventBus, mergeState } from './functions';

type IState = {
  showModeratorBoard: boolean;
  showAdminBoard: boolean;
  currentUser: IUser | undefined;
};

const initialState = {
  showModeratorBoard: false,
  showAdminBoard: false,
  currentUser: undefined,
};

const testAFunction = (a: string, b: string, c: string, d: string) => {
  console.info(`${a} ${b} ${c} ${d}`);
};

const App: React.FC = (): React.ReactElement => {
  const [state, setState] = useState<IState>(initialState);
  //const dispatch = useDispatch();

  /*const logOut = useCallback(() =>{
    dispatch(logoutUser);
  },[dispatch])*/
  useEffect(() => {
    const user = getCurrentUser();
    console.info(user);
    if (user) {
      const _user = {
        currentUser: user,
        showModeratorBoard: false,
        showAdminBoard: false,
      };
      setState((prevState) => {
        return mergeState(prevState, _user);
      });
    }
    /*else{
      const _user = {showModeratorBoard:false,showAdminBoard:false}
      setState(prevState =>{return mergeState(prevState,_user)});
    }*/
    eventBus.on('logout', logOut);

    return () => {
      eventBus.remove('logout', logOut);
    }; // I THINK THIS IS COMPONENT_DISSAPEARD
  }, []);

  const logOut = (): void => {
    logoutUser();
    setState((prevState) => {
      const _user = {
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      };
      return mergeState(prevState, _user);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">
          {' '}
          Sundstrom{' '}
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {' '}
            <Link to={'/home'} className="nav-link">
              {' '}
              Home{' '}
            </Link>{' '}
          </li>
          {state.showModeratorBoard && <ModeratorBoard />}
          {state.showAdminBoard && <AdminBoard />}
          {state.currentUser && <CurrentUser />}
        </div>

        {state.currentUser ? (
          <UserProfile
            username={state.currentUser.username ?? ''}
            callback={logOut}
          />
        ) : (
          <div className="navbar-nav ml-auto">
            <LogIn />
            <SignUp />
          </div>
        )}
      </nav>

      <div className="mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>

      {/*<AuthVerify logOut={logOut}/>*/}
    </div>
  );
};

export default App;
