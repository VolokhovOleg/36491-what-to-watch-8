import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../error/error';
import PrivateRoute from '../private-router/private-router';
import {Path} from '../../types/route';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/store';
import Spinner from '../spinner/spinner';

const mapStateToProps = ({films, filteredFilmFromGenre}: State) => ({
  films,
  filteredFilmFromGenre,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

function App(props: Props): JSX.Element {
  const {films, filteredFilmFromGenre} = props;
  return (
    <BrowserRouter>
      {
        filteredFilmFromGenre.length > 0 ?
          <Switch>
            <Route path={Path.MAIN} exact>
              <Main />
            </Route>
            <Route path={Path.LOGIN} exact>
              <SignIn />
            </Route>
            <Route path={Path.FILMS} exact>
              <Film
                films={films}
                reviews={[]}
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
          : <Spinner />
      }
    </BrowserRouter>
  );
}
export {App};
export default connector(App);
