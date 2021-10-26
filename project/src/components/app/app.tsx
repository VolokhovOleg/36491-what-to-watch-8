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

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = ({films}: State) => ({
  films
});

const connector = connect(mapStateToProps, null);

function App(props: Props): JSX.Element {
  const {films} = props;
  return (
    <>
      {
        films &&
        <BrowserRouter>
          <Switch>
            <Route path={Path.MAIN} exact>
              <Main />
            </Route>
            <Route path={Path.LOGIN} exact>
              <SignIn />
            </Route>
            <Route path={Path.FILMS} exact>
              <Film
                films={[]}
                reviews={[]}
              />
            </Route>
            <Route path={Path.ADD_REVIEW} exact>
              <AddReview films={[]} />
            </Route>
            <Route path={Path.PLAYER} exact>
              <Player films={[]}/>
            </Route>
            <PrivateRoute path={Path.MY_LIST} exact component={() => <MyList films={[]} />} />
            <Route>
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      }
    </>

  );
}
export {App};
export default connector(App);
