import React from 'react';

import './sign-in-and-sign-up.scss';
import SingIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sing-up';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;