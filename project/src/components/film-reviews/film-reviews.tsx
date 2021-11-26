import FilmReviewItem from '../film-review-item/film-review-item';
import {Comments, Comment} from '../../types/comments';

type Props = {reviews: Comments}

function FilmReviews({reviews}: Props): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((item: Comment, index) => {
            if (index % 2) {
              const {comment, user, date, rating, id} = item;
              return <FilmReviewItem
                comment={comment}
                user={user}
                date={date}
                rating={rating}
                key={id}
              />;
            }
          })
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.map((item: Comment, index) => {
            if (!(index % 2)) {
              const {comment, user, date, rating, id} = item;
              return <FilmReviewItem
                comment={comment}
                user={user}
                date={date}
                rating={rating}
                key={id}
              />;
            }
          })
        }
      </div>
    </div>
  );
}

export default FilmReviews;
