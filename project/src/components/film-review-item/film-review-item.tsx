import {Review} from '../../types/films';

type Props = Omit<Review, 'id'>;

function FilmReviewItem({text, author, date, rate}: Props): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2015-11-18">{date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rate}</div>
    </div>
  );
}

export default FilmReviewItem;
