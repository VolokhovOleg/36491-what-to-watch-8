import FilmList from '../film-list/film-list';
import Header from '../header/header';
import {HeaderType} from '../../consts';
import {useMyList} from '../../hooks/my-list/useMyList';
import Footer from '../footer/footer';

function MyList(): JSX.Element {
 const {films} = useMyList();

  return (
    <div className="user-page">
      <Header headerType={HeaderType.MY_LIST} />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films}/>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
