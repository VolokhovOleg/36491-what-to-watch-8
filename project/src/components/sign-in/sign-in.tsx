import Header from '../header/header';
import {HeaderType} from '../../consts';
import {Redirect} from 'react-router-dom';
import {Path} from '../../types/route';
import {AuthorizationStatus} from '../../types/api';
import {useSignIn} from '../../hooks/sign-in/useSignIn';

function SignIn(): JSX.Element {
  const {onClickSubmitHandler, loginRef, passwordRef, authorizationStatus} = useSignIn();

  return (
    <>
      <div className="user-page">
        <Header headerType={HeaderType.SIGN_IN} />
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button onClick={onClickSubmitHandler} className="sign-in__btn" type="button">Sign in</button>
            </div>
          </form>
        </div>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      {
        (AuthorizationStatus.Auth === authorizationStatus) && <Redirect to={Path.MAIN} />
      }
    </>
  );
}

export default SignIn;
