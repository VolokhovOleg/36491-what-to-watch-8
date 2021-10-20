import {Film as FilmType, Review} from '../../moks/films';
import FilmList from '../film-list/film-list';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {RouteParams, TabNameType, TabsType} from '../../types';
import Tabs from '../tabs/tabs';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-deails/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import {FILM_DETAILS_TAB_NAMES} from '../../consts';

type Props = {
  films: FilmType[],
  reviews: Review[],
};

function Film({films, reviews}: Props): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);
  const [activeTabName, setActiveTabNameState] = useState<TabNameType | string>(TabNameType.OVERVIEW);
  const { id } = useParams<RouteParams>();

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
  const onChangeActiveTabHandler = (TabName: TabNameType | string): void => {
    setActiveTabNameState(TabName);
  };

  useEffect(() => {
    setActiveFilm(films.find((item: FilmType) => item.id.toString() === id) || null);
  }, []);

  return (
    <div>
      {
        activeFilm &&
        <>
          <section className="film-card film-card--full">
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={activeFilm.imageSrc} alt={activeFilm.title} />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <header className="page-header film-card__head">
                <div className="logo">
                  <a href="main.html" className="logo__link">
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                  </a>
                </div>
                <ul className="user-block">
                  <li className="user-block__item">
                    <div className="user-block__avatar">
                      <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
                    </div>
                  </li>
                  <li className="user-block__item">
                    <a className="user-block__link">Sign out</a>
                  </li>
                </ul>
              </header>
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
                    <button className="btn btn--list film-card__button" type="button">
                      <svg viewBox="0 0 19 20" width={19} height={20}>
                        <use xlinkHref="#add" />
                      </svg>
                      <span>My list</span>
                    </button>
                    <a href="add-review.html" className="btn film-card__button">Add review</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={activeFilm.imageSrc} alt={activeFilm.title} width={218} height={327} />
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
