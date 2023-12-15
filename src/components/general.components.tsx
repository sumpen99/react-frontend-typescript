import {Field,ErrorMessage} from "formik";
import { Link } from "react-router-dom";
import IUser from "../types/user.type";

interface UserProfileProps {
    username: string;
    callback: React.MouseEventHandler<HTMLAnchorElement>;
    //callback: (event: MouseEvent, todo: Todo) => void;
}
interface UserProfileFieldProps {
    currentUser: IUser & { accessToken: string };
}
interface SubmitButtonProps {
    loading: boolean;
}
interface AlertMessageProps {
    message: string;
}
interface JumbotronProps {
    content: string;
}
const UsernameField = ():React.ReactElement =>{
    return(
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" className="form-control"/>
            <ErrorMessage name="username" component="div" className="alert alert-danger"/>
        </div>
    );
}

const PasswordField = ():React.ReactElement =>{
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-control"/>
            <ErrorMessage name="password" component="div" className="alert alert-danger"/>
        </div>
    );
}

const EmailField = ():React.ReactElement =>{
    return(
        <div className="form-group">
            <label htmlFor="email"> Email </label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"/>
        </div>
    )
}

const FirstnameField = ():React.ReactElement =>{
    return(
        <div className="form-group">
            <label htmlFor="firstname"> Firstname </label>
            <Field name="firstname" type="text" className="form-control"/>
            <ErrorMessage name="firstname" component="div" className="alert alert-danger"/>
        </div>
    )
}

const LastnameField = ():React.ReactElement =>{
    return(
        <div className="form-group">
            <label htmlFor="lastname"> Lastname </label>
            <Field name="lastname" type="text" className="form-control"/>
            <ErrorMessage name="lastname" component="div" className="alert alert-danger"/>
        </div>
    )
}

const ModeratorBoard = ():React.ReactElement =>{
    return(
        <li className="nav-item">
            <Link to={"/mod"} className="nav-link"> Moderator Board </Link>
        </li>
    )
}

const AdminBoard = ():React.ReactElement =>{
    return(
        <li className="nav-item">
            <Link to={"/admin"} className="nav-link"> Admin Board </Link>
        </li>
    )
}

const CurrentUser = ():React.ReactElement =>{
    return(
        <li className="nav-item">
            <Link to={"/user"} className="nav-link"> User </Link>
        </li>
    )
}
const UserProfile: React.FC<UserProfileProps> = ({ username, callback }):React.ReactElement => {
    return(
        <div className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                {username}
                </Link>
            </li>
            <li className="nav-item">
                <a href="/login" className="nav-link" onClick={callback}>
                LogOut
                </a>
            </li>
        </div>
    )
}

const SignupButton = ():React.ReactElement =>{
    return(
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      </div>
    )
}

const SubmitButton: React.FC<SubmitButtonProps> = ({loading}):React.ReactElement =>{
    return(
        <div className="form-group">
            <button 
                type="submit" 
                className="btn btn-primary btn-block" 
                disabled={loading}> 
                {loading && (<span className="spinner-border spinner-border-sm"></span>)} 
                <span>Login</span>
            </button>
        </div>
    );
}

const AlertMessage:React.FC<AlertMessageProps> = ({message}):React.ReactElement =>{
    return(
        <div className="form-group">
            <div className="alert alert-danger" role="alert">{message}</div>
        </div>
    );
}

const LogIn = ():React.ReactElement =>{
    return(
        <li className="nav-item">
            <Link to={"/login"} className="nav-link"> Login </Link>
        </li>
    )
}

const SignUp = ():React.ReactElement =>{
    return(
        <li className="nav-item">
            <Link to={"/register"} className="nav-link"> Sign Up </Link>
        </li>
    )
}

const BaseImage = ():React.ReactElement =>{
    return(
        <img 
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" 
            alt="profile-img" 
            className="profile-img-card"/>
    )
}

const Jumbotron:React.FC<JumbotronProps> = ({content}):React.ReactElement =>{
    return(<div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>);
}

const ProfileField:React.FC<UserProfileFieldProps> = ({currentUser}):React.ReactElement =>{
    return(
        <div>
              <header className="jumbotron"> <h3> <strong>{currentUser.username}</strong> Profile </h3> </header>
              <p> 
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
              </p>
              <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
              </p>
              <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
              </p>
              <p>
              <strong>Firstname:</strong>{" "}
              {currentUser.firstname}
              </p>
              <p>
              <strong>Lastname:</strong>{" "}
              {currentUser.lastname}
              </p>
              <strong>Authorities:</strong>
              <ul>{/*currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)*/}</ul>
        </div>
    )
}


export {
    ModeratorBoard,
    FirstnameField,
    UsernameField,
    LastnameField,
    PasswordField,
    SignupButton,
    CurrentUser,
    EmailField,
    AdminBoard,
    BaseImage,
    SignUp,
    LogIn,
    SubmitButton,
    AlertMessage,
    ProfileField,
    UserProfile,
    Jumbotron
}