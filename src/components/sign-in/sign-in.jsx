import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect'
// import { selectCurrentEmailAndPassword } from '../../redux/user/user.selectors'

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton
              type={'button'}
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {' '}
              Sign In With Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchtoProps)(SignIn);
