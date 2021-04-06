import React from 'react';
import { Formik } from 'formik';
import * as SF from './login-form.styled';
import { Grid, TextField } from '@material-ui/core';

const LoginForm = () => {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
  }

  const initialLabels = [
    'userName', 
    'email',
    'password',
  ]

  const paperStyle={padding:20}

  console.log(initialValues)

  return (
    <Grid>
      <SF.StyledPaper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <SF.StyledAvatar></SF.StyledAvatar>
          <SF.StyledTitle>Sign In</SF.StyledTitle>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required/>
        <TextField label='Password' placeholder='Create password' type='password' fullWidth required/>
      </SF.StyledPaper>
    </Grid>
    
  )
};

export { LoginForm }

