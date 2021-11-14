import {AuthorizationStatus} from '../../types/api';
import {Path} from '../../types/route';
import {Link} from 'react-router-dom';
import {useUser} from '../../hooks/user/useUser';

function User(): JSX.Element {
 const {authorizationStatus, userInfo, onClickLogOutHandler} = useUser();

  return (
    <ul className="user-block">
      {
        (AuthorizationStatus.Auth === authorizationStatus) &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userInfo?.avatarUrl} alt={userInfo?.name} width={63} height={63}/>
          </div>
        </li>
      }
      <li className="user-block__item">
        {
          (AuthorizationStatus.Auth === authorizationStatus) ?
            <a onClick={onClickLogOutHandler} className="user-block__link">Sign out</a>
            : <Link to={Path.LOGIN} className="user-block__link">Sign in</Link>
        }
      </li>
    </ul>
  );
}

export default User;
