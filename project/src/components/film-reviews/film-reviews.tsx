import {Review} from '../../types/films';
import FilmReviewItem from '../film-review-item/film-review-item';

type Props = {reviews: Review[]}

function FilmReviews({reviews}: Props): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((item: Review) => {
            const {text, author, date, rate, id} = item;
            return <FilmReviewItem text={text} author={author} date={date} rate={rate} key={id}/>;
          })
        }
      </div>
    </div>
  );
}

export default FilmReviews;
