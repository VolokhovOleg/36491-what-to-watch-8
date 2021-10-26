import {Film} from '../../types/films';

type Props = Pick<Film, 'score' | 'lvl' | 'rating' | 'description' | 'director' | 'starring'>;

function FilmOverview({score, lvl, rating, description, director, starring}: Props): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{score}</div>
        <p className="film-rating__meta">
          {
            lvl &&
            <span className="film-rating__level">{lvl}</span>
          }
          <span className="film-rating__count">{rating} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {description}
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
