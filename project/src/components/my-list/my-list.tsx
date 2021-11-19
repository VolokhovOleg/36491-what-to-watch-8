import FilmList from '../film-list/film-list';
import Header from '../header/header';
import {HeaderType} from '../../consts';
import {useMyList} from '../../hooks/my-list/useMyList';

function MyList(): JSX.Element {
 const {films} = useMyList();

  return (
    <div className="user-page">
      <Header headerType={HeaderType.MY_LIST} />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films}/>
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
  );
}

export default MyList;
