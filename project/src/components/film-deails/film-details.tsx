import {Film} from '../../types/films';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {Fragment} from 'react';
import {nanoid} from 'nanoid';

type Props = Pick<Film, 'director' | 'starring' | 'runTime' | 'genre' | 'release'>;

dayjs.extend(duration);

function FilmDetails({director, starring, runTime, genre, release}: Props): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              starring
                .map((item: string, index, array) =>
                  <Fragment key={nanoid()}>
                    {item}
                    {
                      (index < (array.length - 1))
                      && ','
                    }
                    <br/>
                  </Fragment>
                )
            }
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {
              dayjs
                .duration(parseInt(runTime, 10), 'minutes')
                .format('HH:mm')
            }
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{release}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
