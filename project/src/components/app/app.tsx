import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import PrivateRoute from '../private-router/private-router';
import {Path} from '../../types';

type Props = {
  title: string,
  genre: string,
  release: string,
};

function App({title, genre, release}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Path.MAIN} exact>
          <Main
            title={title}
            genre={genre}
            release={release}
          />
        </Route>
        <Route path={Path.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={Path.FILMS} exact>
          <Film />
        </Route>
        <Route path={Path.ADD_REVIEW} exact>
          <AddReview />
        </Route>
        <Route path={Path.PLAYER} exact>
          <Player />
        </Route>
        <PrivateRoute path={Path.MY_LIST} exact component={MyList} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
