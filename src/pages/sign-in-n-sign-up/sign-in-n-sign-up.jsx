import React from 'react';
import './sign-in-n-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUpPage = () => (
  <div className="sign-in-n-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
