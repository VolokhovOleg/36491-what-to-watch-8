import User from '../user/user';

function HeaderMyList(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <h1 className="page-title user-page__title">My list</h1>
      <User />
    </header>
  );
}

export default HeaderMyList;
