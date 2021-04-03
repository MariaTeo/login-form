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

  console.log(initialValues)

  return (
    <SF.StyledPaper elevation={6}>
      <SF.StyledTitle>Login details</SF.StyledTitle>
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

