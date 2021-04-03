import { Paper, TextField } from '@material-ui/core';
import { Form } from 'formik';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  && {
    background-color: rose;
    height: 400px;
    width: 500px;
    margin-top: 2rem;
  }
`

export const StyledForm = styled(Form)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
  }
`

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
    width: 450px;
  }
` 

export const StyledTitle = styled.h2`
  text-align: center;
`
  

