import {Film as FilmType} from '../../types/films';
import {useParams} from 'react-router';
import {useEffect, useState} from 'react';
import {RouteParams} from '../../types/route';

type Props = {
  films: FilmType[]
};

function Player({films}: Props): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    setActiveFilm(films.find((item: FilmType) => item.id.toString() === id) || null);
  }, []);

  return (
    <div className="player">
      {
        activeFilm &&
        <>
          <video src={activeFilm.trailerSrc} className="player__video" poster={activeFilm.imageSrc} />
          <button type="button" className="player__exit">Exit</button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={30} max={100} />
                <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
              </div>
              <div className="player__time-value">{activeFilm.value}</div>
            </div>
            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{activeFilm.title}</div>
              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width={27} height={27}>
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Player;
