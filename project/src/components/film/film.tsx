import FilmList from '../film-list/film-list';
import {useParams} from 'react-router';
import Tabs from '../tabs/tabs';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-deails/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import {FILM_DETAILS_TAB_NAMES, HeaderType} from '../../consts';
import {TabNameType, TabsType} from '../../types/tabs';
import {Path, RouteParams} from '../../types/route';
import Header from '../header/header';
import {useDispatch} from 'react-redux';
import {changeMyList} from '../../store/api-actions';
import {useFilm} from '../../hooks/film/useFilm';
import {useTabs} from '../../hooks/film/useTabs';
import {useCheckFilmInMyList} from '../../hooks/my-list/useCheckFilmInMyList';
import Footer from '../footer/footer';
import {useSimilarFilms} from '../../hooks/film/useSimilarFilms';
import {useLoadComments} from '../../hooks/comments/useLoadComments';
import {Link, useHistory} from 'react-router-dom';

function Film(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams<RouteParams>();
  const {activeFilm} = useFilm(id);
  const {reviews} = useLoadComments(id);
  const {similarFilms} = useSimilarFilms(id);
  const {inMyList} = useCheckFilmInMyList();
  const {activeTabName, onChangeActiveTabHandler} = useTabs();

  const onCLickAddToMyListButtonHandler = () => {
    dispatch(changeMyList(1));
  };
  const onCLickRemoveFromMyListButtonHandler = () => {
    dispatch(changeMyList(0));
  };
  const onClickPlayButtonHandler = () => {
    history.push(Path.PLAYER.replace(':id', id.toString()));
  };

  const setFilmContentInfo = (TabName: TabNameType | string): JSX.Element | null => {
    if (activeFilm) {
      const {genre, release, starring, director, runTime, score, lvl, rating, description} = activeFilm;

      switch (TabName) {
        case TabNameType.DETAILS:
          return (
            <FilmDetails
              genre={genre}
              release={release}
              starring={starring}
              director={director}
              runTime={runTime}
            />
          );
        case TabNameType.OVERVIEW:
          return (
            <FilmOverview
              score={score}
              lvl={lvl}
              rating={rating}
              description={description}
              director={director}
              starring={starring}
            />
          );
        case TabNameType.REVIEWS:
          return (
            <FilmReviews reviews={reviews} />
          );
        default:
          return null;
      }
    }

    return null;
  };

  return (
    <div>
      {
        activeFilm &&
        <>
          <section className="film-card film-card--full" style={{backgroundColor: activeFilm.bgColor}}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={activeFilm.bgImage} alt={activeFilm.title} />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <Header headerType={HeaderType.DEFAULT} />
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{activeFilm.title}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{activeFilm.genre}</span>
                    <span className="film-card__year">{activeFilm.release}</span>
                  </p>
                  <div className="film-card__buttons">
                    <button
                      onClick={onClickPlayButtonHandler}
                      className="btn btn--play film-card__button"
                      type="button"
                    >
                      <svg viewBox="0 0 19 19" width={19} height={19}>
                        <use xlinkHref="#play-s" />
                      </svg>
                      <span>Play</span>
                    </button>
                    {
                      inMyList
                        ? <button onClick={onCLickRemoveFromMyListButtonHandler} className="btn btn--list film-card__button" type="button">
                          <svg viewBox="0 0 18 14" width={18} height={14}>
                            <use xlinkHref="#in-list" />
                          </svg>
                          <span>My list</span>
                        </button>
                        : <button onClick={onCLickAddToMyListButtonHandler} className="btn btn--list film-card__button" type="button">
                          <svg viewBox="0 0 19 20" width={19} height={20}>
                            <use xlinkHref="#add" />
                          </svg>
                          <span>My list</span>
                        </button>
                    }
                    <Link to={Path.ADD_REVIEW.replace(':id', id)} className="btn film-card__button">Add review</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={activeFilm.posterSrc} alt={activeFilm.title} width={218} height={327} />
                </div>
                <div className="film-card__desc">
                  <nav className="film-nav film-card__nav">
                    <Tabs
                      type={TabsType.FILM_CARD}
                      tabsNames={FILM_DETAILS_TAB_NAMES}
                      onChangeTabHandler={onChangeActiveTabHandler}
                    />
                  </nav>
                  {setFilmContentInfo(activeTabName)}
                </div>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              {
                similarFilms && similarFilms.length > 0 &&
                <FilmList films={similarFilms}/>
              }
              {
                similarFilms && similarFilms.length === 0 && 'Нет похожих фильмов'
              }
            </section>
            <Footer />
          </div>
        </>
      }
    </div>
  );
}

export default Film;
