import {Film as FilmType} from '../../moks/films';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {RouteParams} from '../../types';
import AddReviewForm from '../add-review-form/add-review-form';

type Props = {
  films: FilmType[]
};

function AddReview({films}: Props): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    setActiveFilm(films.find((item: FilmType) => item.id.toString() === id) || null);
  }, []);

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
            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="film-page.html" className="breadcrumbs__link">{activeFilm.title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>
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
            <div className="film-card__poster film-card__poster--small">
              <img src={activeFilm.imageSrc} alt={activeFilm.title} width={218} height={327} />
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
