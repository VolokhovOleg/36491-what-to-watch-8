import FilmList from '../film-list/film-list';
import {TabsType} from '../../types/tabs';
import Tabs from '../tabs/tabs';
import {HeaderType} from '../../consts';
import ShowMoreBtn from '../showe-more-btn/show-more-btn';
import Header from '../header/header';
import {useGenres} from '../../hooks/main/useGenres';
import {useFilms} from '../../hooks/main/useFilms';
import {useFilmsToShow} from '../../hooks/main/useFilmsToShow';

function Main(): JSX.Element {
  const {films, filmCard, filteredFilmFromGenre} = useFilms();
  const {onClickShowMoreBtnHandler, filmAmountToShow, setFilmAmountToShowState} = useFilmsToShow();
  const {genres, onChangeGenreTabHandler} = useGenres(films, setFilmAmountToShowState);

  return (
    <>
      {
        filmCard &&
        <section className="film-card">
          <div className="film-card__bg">
            <img src={filmCard.bgImage} alt={`${filmCard.title} poster`}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header headerType={HeaderType.DEFAULT} />
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={filmCard.posterSrc} alt={`${filmCard.title} poster`} width={218} height={327}/>
              </div>
              <div className="film-card__desc">
                <h2 className="film-card__title">
                  {filmCard.title}
                </h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">
                    {filmCard.genre}
                  </span>
                  <span className="film-card__year">
                    {filmCard.release}
                  </span>
                </p>
                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {
            genres &&
            <Tabs type={TabsType.GENRE} onChangeTabHandler={onChangeGenreTabHandler} tabsNames={genres} />
          }
          <FilmList films={filteredFilmFromGenre.slice(0, filmAmountToShow)}/>
          {
            (filmAmountToShow < filteredFilmFromGenre.length) &&
            <ShowMoreBtn handler={onClickShowMoreBtnHandler}/>
          }
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </>);
}

export default Main;
