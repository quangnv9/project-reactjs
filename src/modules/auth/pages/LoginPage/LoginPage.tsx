import userApi from 'configs/api/userApi';
import { ROUTES } from 'configs/Routes';
import { ILoginParams } from 'models/auth';
import LoginForm from 'modules/auth/components/LoginForm/LoginForm';
import React, { useCallback } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

interface Props {}

const LoginPage = (props: Props) => {
  const history = useHistory();
  const onLogin = useCallback(async (values: ILoginParams) => {
    try {
      const data = await userApi.login(values);
      console.log(data);
      if (data.data.user_cookie) {
        history.replace(ROUTES.user);
        localStorage.setItem('token', data.data.user_cookie);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
