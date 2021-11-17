import {useParams} from 'react-router';
import {RouteParams} from '../../types/route';
import {useFilm} from '../../hooks/film/useFilm';
import {useVideoPlayer} from '../../hooks/player/useVideoPlayer';
import Spinner from '../spinner/spinner';

function Player(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const {activeFilm} = useFilm(id);
  const {
    playerRef,
    currentFilmTimeInPercent,
    currentFilmTime,
    isPlaying,
    isVideoLoad,
    onPlayingVideoHandler,
    onCLickExitButtonHandler,
    onClickPauseButtonHandler,
    onClickPlayButtonHandler,
    onClickFullScreenButtonHandler,
  } = useVideoPlayer(id);

  return (
    <div className="player">
      {
        activeFilm &&
        <>
          {isVideoLoad && <Spinner/>}
          <video
            ref={playerRef}
            src={activeFilm.videoSrc}
            className="player__video"
            poster={activeFilm.bgImage}
            onTimeUpdate={onPlayingVideoHandler}
          >
            <source src={activeFilm.videoSrc} type="video/mp4" />
            <source src={activeFilm.videoSrc} type="video/ogg" />
            <source src={activeFilm.videoSrc} type="video/webm" />
          </video>
          <button
            onClick={onCLickExitButtonHandler}
            type="button"
            className="player__exit"
          >
            Exit
          </button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress
                  className="player__progress"
                  value={isNaN(currentFilmTimeInPercent) ? 0 : currentFilmTimeInPercent}
                  max={100}
                />
                <div className="player__toggler" style={{left: `${currentFilmTimeInPercent}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{currentFilmTime}</div>
            </div>
            <div className="player__controls-row">
              {
                isPlaying ?
                  <button
                    onClick={onClickPauseButtonHandler}
                    type="button"
                    className="player__play"
                  >
                    <svg viewBox="0 0 14 21" width={14} height={21}>
                      <use xlinkHref="#pause"/>
                    </svg>
                    <span>Pause</span>
                  </button>
                  : <button
                    onClick={onClickPlayButtonHandler}
                    type="button"
                    className="player__play"
                  >
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
              }
              <div className="player__name">{activeFilm.title}</div>
              <button
                onClick={onClickFullScreenButtonHandler}
                type="button"
                className="player__full-screen"
              >
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
