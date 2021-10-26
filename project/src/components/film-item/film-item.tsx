import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import {DELAY_TO_PLAY_VIDEO} from '../../consts';
import FilmCardVideoPlayer from '../film-card-videoplayer/film-card-videoplayer';

type Props = Pick<Film, 'imageSrc' | 'title' | 'id' | 'trailerSrc'>;

function FilmItem({imageSrc, title, id, trailerSrc}: Props): JSX.Element {
  const [isActive, setActiveState] = useState<boolean>(false);
  const [timeoutHandle, setTimeoutHandleState] = useState<number | null>(null);

  const onMouseEnterFilmHandler = (): void => {
    setTimeoutHandleState(window.setTimeout(() => setActiveState(true), DELAY_TO_PLAY_VIDEO));
  };
  const onMouseLeaveFilmHandler = (): void => {
    if (timeoutHandle) {
      window.clearTimeout(timeoutHandle);
      setTimeoutHandleState(null);
      setActiveState(false);
    }
  };

  return (
    <article
      onMouseEnter={onMouseEnterFilmHandler}
      onMouseLeave={onMouseLeaveFilmHandler}
      className="small-film-card catalog__films-card"
    >
      {
        !isActive ?
          <>
            <div className="small-film-card__image">
              <img src={imageSrc} alt={title} width={280} height={175}/>
            </div>
            <h3 className="small-film-card__title">
              <Link className={'small-film-card__link'} to={`film/${id}`}>{title}</Link>
            </h3>
          </>
          :
          <FilmCardVideoPlayer trailerSrc={trailerSrc} imageSrc={imageSrc} />
      }
    </article>
  );
}

export default FilmItem;
