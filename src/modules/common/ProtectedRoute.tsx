import React from 'react';
import { ROUTES } from 'configs/Routes';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from 'utils/constants';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {}

const ProtectedRoute = (props: Props) => {
  const { ...rest } = props;
  const auth = Cookies.get(ACCESS_TOKEN_KEY);

  if (auth) {
    return <Route {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: ROUTES.login,
      }}
    />
  );
};

export default ProtectedRoute;
