import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from 'configs/Routes';

import ProtectedRoute from 'modules/common/ProtectedRoute';

const HomePage = lazy(() => import('modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('modules/auth/pages/LoginPage/LoginPage'));
const UserList = lazy(() => import('modules/users/pages/UserList/UserList'));
const CreateUser = lazy(() => import('modules/users/pages/CreateUser/CreateUser'));
const UserDetail = lazy(() => import('modules/users/pages/UserDetail/UserDetail'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.user} component={UserList} />
        <Route path={ROUTES.userDetail} component={UserDetail} />
        <Route path={ROUTES.createUser} component={CreateUser} />

        <Route path="/" component={LoginPage} exact />
      </Switch>
    </Suspense>
  );
};
