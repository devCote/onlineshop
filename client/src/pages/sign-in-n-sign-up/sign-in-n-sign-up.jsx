import React from 'react';
import './sign-in-n-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { connect } from 'react-redux';
import { userAuthificationLoaded } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/with-spinner/with-spinner.styles';
import { useState } from 'react';
import { useEffect } from 'react';

const SignInAndSignUpPage = ({ isLoading }) => {
  const [currentStatus, setCurrentStatus] = useState(isLoading);

  useEffect(() => {
    setCurrentStatus(isLoading);
  }, [isLoading]);

  return (
    <div className="sign-in-n-sign-up">
      {currentStatus ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: state => !userAuthificationLoaded(state),
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
