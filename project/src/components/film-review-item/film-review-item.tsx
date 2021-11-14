import {Comment} from '../../types/comments';

type Props = Omit<Comment, 'id'>;

function FilmReviewItem({comment, user, date, rating}: Props): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2015-11-18">{date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmReviewItem;
