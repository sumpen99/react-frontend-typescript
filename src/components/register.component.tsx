import React, { useState } from 'react'
import {Formik,Form} from "formik";
import { UsernameField,PasswordField,EmailField,AlertMessage,SignupButton, BaseImage, FirstnameField, LastnameField} from './general.components';
import { mergeState, parseResponseError } from '../functions';
import {registerUser} from "../services/auth.service";
import { validationRegisterSchema } from '../schema';

type State = {
    successful:boolean,
    message:string
}

const initialState = {
  successful: false,
  message: ""
};

const initialValues = {
 username: "sumpen99",
 email: "fredrik@heatia.se",
 password: "st3lv1oo**",
 firstname: "Fredrik",
 lastname: "Sundström",
};

const Register:React.FC = ():React.ReactElement =>{
    const [state,setState] = useState<State>(initialState);

    const handleRegister = (formValue: { username: string; email: string; password: string,firstname:string,lastname:string }):void =>{
      
      const {username,email,password,firstname,lastname} = formValue;
        
      registerUser(username,email,password,firstname,lastname)
          .then((response) =>{
            setState(prevState => { return mergeState(prevState,{message:response.data.message,successful:true});})
          })
          .catch((error) =>{
            setState(prevState =>{ return mergeState(prevState,{message:parseResponseError(error),successful:false});})

          });

    }
    
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <BaseImage/>
          <Formik
            initialValues={initialValues}
            validationSchema={validationRegisterSchema}
            onSubmit={handleRegister}>
            <Form>
              {!state.successful && (
                <div>
                  <FirstnameField/>
                  <LastnameField/>
                  <UsernameField/>
                  <EmailField/>
                  <PasswordField/>
                  <SignupButton/>
                </div>
              )}
              {state.message && ( <AlertMessage message={state.message}/>)}
            </Form>
          </Formik>
        </div>
      </div>
    );
}

export default Register;