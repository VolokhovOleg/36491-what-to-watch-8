import {AuthorizationStatus} from '../../types/api';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/store';
import {Path} from '../../types/route';
import {Link} from 'react-router-dom';

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

function User(props: Props): JSX.Element {
  const {authorizationStatus} = props;
  return (
    <ul className="user-block">
      {
        (AuthorizationStatus.Auth === authorizationStatus) &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63}/>
          </div>
        </li>
      }
      <li className="user-block__item">
        {
          (AuthorizationStatus.Auth === authorizationStatus) ?
            <a className="user-block__link">Sign out</a>
            : <Link to={Path.LOGIN} className="user-block__link">Sign in</Link>
        }
      </li>
    </ul>
  );
}

export {User};
export default connector(User);
