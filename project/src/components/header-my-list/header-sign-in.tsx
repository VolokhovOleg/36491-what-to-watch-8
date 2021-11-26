import User from '../user/user';
import {Path} from '../../types/route';
import {Link} from 'react-router-dom';

function HeaderMyList(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={Path.MAIN} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <h1 className="page-title user-page__title">My list</h1>
      <User />
    </header>
  );
}

export default HeaderMyList;
