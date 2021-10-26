import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {Path} from '../../types/route';

type Props = RouteProps & {
  component: () => JSX.Element;
};

const hasAccess = false;

function PrivateRoute({component: Component, ...rest}: Props): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        hasAccess
          ? <Component {...props} />
          : <Redirect to={Path.LOGIN} />}
    />
  );
}

export default PrivateRoute;
