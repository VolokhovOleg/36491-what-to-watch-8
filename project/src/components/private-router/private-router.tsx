import {Route, Redirect, RouteProps} from 'react-router-dom';
import {Path} from '../../types/route';
import {AuthorizationStatus} from '../../types/api';
import {useSelector} from 'react-redux';
import {State} from '../../types/store';
import {getAuthState} from '../../store/user/selectors';

function PrivateRoute(props: RouteProps): JSX.Element {
  const authorizationStatus = useSelector<State, AuthorizationStatus>(getAuthState);
  const {exact, path, render} = props;

  return (
    <>
      {
        AuthorizationStatus.Auth === authorizationStatus
          ? <Route
            exact={exact}
            path={path}
            render={render}
          />
          : <Redirect to={Path.LOGIN} />
      }
    </>

  );
}

export default PrivateRoute;
