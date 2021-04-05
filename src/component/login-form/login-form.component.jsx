import React from 'react';
import { Formik } from 'formik';
import * as SF from './login-form.styled'

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
    <SF.StyledPaper elevation={10} style={paperStyle}>
      <SF.StyledTitle>Login Form</SF.StyledTitle>
      <Formik initialValues={initialValues}>
        {({ values, setFieldValues, handleChange, handleSubmit}) => (
          <SF.StyledForm>
            {initialLabels.map(l => {
              return (
                <SF.StyledTextField
                  id="outlined-basic"
                  variant="outlined"
                  type="Text"
                  label= {l}
                />
              )
            })}
          </SF.StyledForm>
        )
        }
      </Formik> 
    </SF.StyledPaper>
  )
};

export { LoginForm }

