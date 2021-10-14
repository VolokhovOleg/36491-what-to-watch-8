import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import {Film as FilmType} from '../../moks/films';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import PrivateRoute from '../private-router/private-router';
import {Path} from '../../types';

type Props = {
  films: FilmType[]
};

function App({films}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Path.MAIN} exact>
          <Main
            films={films}
          />
        </Route>
        <Route path={Path.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={Path.FILMS} exact>
          <Film
            films={films}
          />
        </Route>
        <Route path={Path.ADD_REVIEW} exact>
          <AddReview films={films} />
        </Route>
        <Route path={Path.PLAYER} exact>
          <Player films={films}/>
        </Route>
        <PrivateRoute path={Path.MY_LIST} exact component={() => <MyList films={films} />} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
