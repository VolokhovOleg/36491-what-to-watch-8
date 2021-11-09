import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
// import PrivateRoute from '../private-router/private-router';
import {Path} from '../../types/route';
import Spinner from '../spinner/spinner';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {loadFilms} from '../../store/api-actions';
import {Films} from '../../types/films';
import {getFilms} from '../../store/films/selectors';
import {State} from '../../types/store';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const films = useSelector<State, Films>(getFilms);

  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  return (
    <BrowserRouter>
      {
        (films.length > 0) ?
          <Switch>
            <Route path={Path.MAIN} exact>
              <Main />
            </Route>
            <Route path={Path.LOGIN} exact>
              <SignIn />
            </Route>
            <Route path={Path.FILMS} exact>
              {/*<Film*/}
              {/*  films={films}*/}
              {/*  reviews={[]}*/}
              {/*/>*/}
            </Route>
            <Route path={Path.ADD_REVIEW} exact>
              {/*<AddReview films={films} />*/}
            </Route>
            <Route path={Path.PLAYER} exact>
              {/*<Player films={films}/>*/}
            </Route>
            {/*<PrivateRoute*/}
            {/*  exact*/}
            {/*  path={Path.MY_LIST}*/}
            {/*  render={() => (*/}
            {/*    <MyList films={films} />*/}
            {/*  )}*/}
            {/*/>*/}
            <Route>
              <Error />
            </Route>
          </Switch>
          : <Spinner />
      }
    </BrowserRouter>
  );
}

export default App;
