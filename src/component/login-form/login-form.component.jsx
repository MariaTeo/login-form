import React from 'react';
import { Formik } from 'formik';
import * as SF from './login-form.styled';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';

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

  const btnstyle={margin:'8px 0'}

  console.log(initialValues)

  return (
    <Grid>
      <SF.StyledPaper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar></Avatar>
          <SF.StyledTitle>Sign In</SF.StyledTitle>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required/>
        <TextField label='Password' placeholder='Create password' type='password' fullWidth required/>
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth >Sign in</Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography> Do you have an account? 
          <Link href="#">Sign up</Link>
        </Typography>
      </SF.StyledPaper>
    </Grid>
    
  )
};

export { LoginForm }

