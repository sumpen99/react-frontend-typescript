import { useState, useEffect } from 'react'
import { Navigate,NavigateFunction,useNavigate } from "react-router-dom";
import {Formik,Form} from "formik";
import {validationLoginSchema} from "../schema/index";
import { mergeState, parseResponseError } from '../functions';
import { UsernameField,PasswordField,SubmitButton,AlertMessage,BaseImage } from './general.components';
import {loginUser,getCurrentUser} from "../services/auth.service";

type Props = {}

type IState = {
    redirect: string | null,
    loading:boolean,
    message:string
}

const initialValues = {
    username:"sumpen99",
    password:"st3lv1oo**"
}

const initialState = {
    redirect: null,
    loading: false,
    message: "",
}

const Login:React.FC<Props> = ():React.ReactElement =>{
    const navigate:NavigateFunction = useNavigate();
    const [state,setState] = useState<IState>(initialState);

    useEffect(() =>{
        const currentUser = getCurrentUser();
        if(currentUser){
            setState(prevState =>{ return mergeState(prevState,{redirect:"/profile"}) });
        }
    },[])

    const handleLogin = (formValue: {username:string,password:string}) => {
        setState(prevState =>{return mergeState(prevState,{loading:true,message:""})})
        const {username,password} = formValue;
        loginUser(username,password)
        .then((_) =>{
            navigate("/profile");
            window.location.reload();
        })
        .catch((error) =>{
            setState(prevState => { return mergeState(prevState,{loading:false,message:parseResponseError(error)}) });
        });
    }
       

    if(state.redirect){return <Navigate to={state.redirect}/>}
    
    return(
        <div className="col-md-12">
            <div className="card card-container">
                <BaseImage/>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationLoginSchema}
                    onSubmit={handleLogin}>
                    <Form>
                        <UsernameField/>
                        <PasswordField/>
                        <SubmitButton loading={state.loading}/>
                        {state.message && ( <AlertMessage message={state.message}/>)}
                    </Form>
                </Formik>
            </div>
        </div>
    )
};

export default Login;
