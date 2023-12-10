import React from "react";
import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';

const SignInComponent = () =>{
    const navigate = useNavigate();

    const responseMessage = (response) =>{
        console.log(response);
        navigate('/timer');
    };
    const errorMessage =(error) => {
        console.log(error);
    };
    return(
        <div>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
        </div>
    )
}
export default SignInComponent;