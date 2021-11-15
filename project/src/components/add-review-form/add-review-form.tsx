import {checkPostSize} from '../../utils';
import {useParams} from 'react-router';
import {Path, RouteParams} from '../../types/route';
import {LoadCommentsStatus} from '../../types/api';
import {Redirect} from 'react-router-dom';
import {useComments} from '../../hooks/comments/useComments';
import {useCommentsForm} from '../../hooks/comments/useCommentsForm';

function AddReviewForm(): JSX.Element {
  const {id} = useParams<RouteParams>();
  const {
    formFieldset,
    textAreaRef,
    commentValue,
    ratingValue,
    onChangeTextAreaHandler,
    onSubmitFormHandler,
    onChangeHandler,
  } = useCommentsForm(id);
  const {commentsLoadState} = useComments(formFieldset);

  return (
    <>
      <form
        className="add-review__form"
        onSubmit={onSubmitFormHandler}
      >
        <fieldset ref={formFieldset}>
          <div className="rating">
            <div className="rating__stars" onChange={onChangeHandler}>
              <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
              <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>
              <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>
              <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>
              <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>
              <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
              <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>
              <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>
              <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>
              <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>
          <div className="add-review__text">
        <textarea
          ref={textAreaRef}
          onChange={onChangeTextAreaHandler}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          defaultValue={commentValue}
        />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={checkPostSize(commentValue.length) || (ratingValue === 0)}
              >
                Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      {
        (commentsLoadState === LoadCommentsStatus.Done) && <Redirect to={Path.FILMS.replace(':id', id)} />
      }
    </>
  );
}

export default AddReviewForm;
