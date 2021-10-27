import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {Path} from '../../types/route';
import {AuthorizationStatus} from '../../types/api';
import {State} from '../../types/store';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};
const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector> & PrivateRouteProps;

function PrivateRoute(props: Props): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(): JSX.Element =>
        AuthorizationStatus.Auth !== authorizationStatus
          ? render()
          : <Redirect to={Path.LOGIN} />}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
