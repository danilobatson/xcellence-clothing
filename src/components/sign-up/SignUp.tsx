import React, { useState } from 'react';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp: React.FC = () => {
  const [signup, setSignup] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = signup;

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignup({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === 'email'
      ? setSignup({ ...signup, email: value })
      : name === 'displayName'
      ? setSignup({ ...signup, displayName: value })
      : name === 'password'
      ? setSignup({ ...signup, password: value })
      : setSignup({ ...signup, confirmPassword: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={(e) => handleChange(e)}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={(e) => handleChange(e)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={(e) => handleChange(e)}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => handleChange(e)}
          label='Confirm Password'
          required
        />
        <CustomButton>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
