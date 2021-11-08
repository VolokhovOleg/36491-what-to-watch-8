import {AuthorizationStatus} from '../../types/api';
import {Path} from '../../types/route';
import {Link} from 'react-router-dom';


function User(): JSX.Element {
  const authorizationStatusL = AuthorizationStatus.Unknown;
  return (
    <ul className="user-block">
      {/*{*/}
      {/*  (AuthorizationStatus.Auth === authorizationStatusL) &&*/}
      {/*  <li className="user-block__item">*/}
      {/*    <div className="user-block__avatar">*/}
      {/*      <img src="img/avatar.jpg" alt="User avatar" width={63} height={63}/>*/}
      {/*    </div>*/}
      {/*  </li>*/}
      {/*}*/}
      {/*<li className="user-block__item">*/}
      {/*  {*/}
      {/*    (AuthorizationStatus.Auth === authorizationStatusL) ?*/}
      {/*      <a className="user-block__link">Sign out</a>*/}
      {/*      : <Link to={Path.LOGIN} className="user-block__link">Sign in</Link>*/}
      {/*  }*/}
      {/*</li>*/}
    </ul>
  );
}

export default User;
