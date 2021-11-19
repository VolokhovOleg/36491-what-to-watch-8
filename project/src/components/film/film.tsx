import FilmList from '../film-list/film-list';
import {useEffect} from 'react';
import {useParams} from 'react-router';
import Tabs from '../tabs/tabs';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-deails/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import {FILM_DETAILS_TAB_NAMES, HeaderType} from '../../consts';
import {TabNameType, TabsType} from '../../types/tabs';
import {RouteParams} from '../../types/route';
import Header from '../header/header';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/store';
import {getComments} from '../../store/films/selectors';
import {Comments} from '../../types/comments';
import {changeMyList, loadComments} from '../../store/api-actions';
import {useFilm} from '../../hooks/film/useFilm';
import {useTabs} from '../../hooks/film/useTabs';
import {useCheckFilmInMyList} from '../../hooks/my-list/useCheckFilmInMyList';

function Film(): JSX.Element {
  const dispatch = useDispatch();
  const reviews = useSelector<State, Comments>(getComments);
  const {id} = useParams<RouteParams>();
  const {activeFilm, films} = useFilm(id);
  const {inMyList} = useCheckFilmInMyList();
  const {activeTabName, onChangeActiveTabHandler} = useTabs();

  const onCLickAddToMyListButtonHandler = () => {
    dispatch(changeMyList(1));
  };
  const onCLickRemoveFromMyListButtonHandler = () => {
    dispatch(changeMyList(0));
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

  useEffect(() => {
    dispatch(loadComments(id));
  }, [id]);

  return (
    <div>
      {
        activeFilm &&
        <>
          <section className="film-card film-card--full">
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
                    <button className="btn btn--play film-card__button" type="button">
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
                    <a href="add-review.html" className="btn film-card__button">Add review</a>
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
              <FilmList films={films.slice(4)}/>
            </section>
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
        </>
      }
    </div>
  );
}

export default Film;
