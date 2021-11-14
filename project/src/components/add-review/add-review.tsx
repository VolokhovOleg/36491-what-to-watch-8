import {useParams} from 'react-router';
import AddReviewForm from '../add-review-form/add-review-form';
import {RouteParams} from '../../types/route';
import {useFilm} from '../../hooks/film/useFilm';
import Header from '../header/header';
import {HeaderType} from '../../consts';

function AddReview(): JSX.Element {
  const {id} = useParams<RouteParams>();
  const {activeFilm} = useFilm(id);

  return (
    <section className="film-card film-card--full">
      {
        activeFilm &&
        <>
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={activeFilm.imageSrc} alt={activeFilm.title} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header headerType={HeaderType.DEFAULT} />
            <div className="film-card__poster film-card__poster--small">
              <img src={activeFilm.posterSrc} alt={activeFilm.title} width={218} height={327} />
            </div>
          </div>
          <div className="add-review">
            <AddReviewForm />
          </div>
        </>
      }
    </section>
  );
}

export default AddReview;
