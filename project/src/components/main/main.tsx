import {useEffect, useState} from 'react';
import {Film} from '../../moks/films';
import FilmList from '../film-list/film-list';
import {Actions, State, TabsType} from '../../types';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {setActiveGenre, setFilteredFilmsFromGenre} from '../../store/action';
import Tabs from '../tabs/tabs';
import {ALL_GENRES} from '../../consts';

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = ({filteredFilmFromGenre, films}: State) => ({
  filteredFilmFromGenre,
  films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  changeActiveGenre(genre: string) {
    dispatch(setActiveGenre(genre));
  },
  filterOutFilms(films: Film[]) {
    dispatch(setFilteredFilmsFromGenre(films));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Main(props: Props): JSX.Element {
  const {filteredFilmFromGenre, films, changeActiveGenre, filterOutFilms} = props;
  const [filmCard, setFilmCardState] = useState<Film | null>(null);
  const [activeGenre, setActiveGenreState] = useState<string>(ALL_GENRES);
  const [genres, setGenresState] = useState<string[] | null>(null);

  const onChangeGenreTabHandler = (tabName: string) => {
    setActiveGenreState(tabName);
  };

  useEffect(() => {
    setFilmCardState(filteredFilmFromGenre[0]);
    setGenresState([...new Set([ALL_GENRES, ...films.map((item) => item.genre)])]);
  }, []);
  useEffect(() => {
    changeActiveGenre(activeGenre);
    filterOutFilms(films);
  }, [activeGenre]);

  return (
    <>
      {
        filmCard &&
        <section className="film-card">
          <div className="film-card__bg">
            <img src={filmCard.imageSrc} alt={`${filmCard.title} poster`}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width={63} height={63}/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={filmCard.imageSrc} alt={`${filmCard.title} poster`} width={218} height={327}/>
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
          <FilmList films={filteredFilmFromGenre}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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

export {Main};
export default connector(Main);
