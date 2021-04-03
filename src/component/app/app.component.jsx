import React from 'react';
import { LoginForm } from '../login-form/login-form.component';
import { StyledAppWrap } from './app.styled';

const App = () => {
  return (
    <StyledAppWrap>
      <LoginForm />
    </StyledAppWrap>
  )
};

export { App };
