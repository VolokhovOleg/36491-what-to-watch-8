import {RefObject, SyntheticEvent, useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {useHistory} from 'react-router-dom';
import {Path} from '../../types/route';
import {ONE_HOUR_IN_SECONDS} from '../../consts';

type returnHookProps = {
  playerRef: RefObject<HTMLVideoElement>,
  currentFilmTimeInPercent: number,
  currentFilmTime: string,
  isPlaying: boolean,
  isVideoLoad: boolean,
  onPlayingVideoHandler: () => void,
  onCLickExitButtonHandler: () => void,
  onClickPauseButtonHandler: (evt: SyntheticEvent) => void,
  onClickPlayButtonHandler: (evt: SyntheticEvent) => Promise<void>,
  onClickFullScreenButtonHandler: (evt: SyntheticEvent) => Promise<void>,
};

export const useVideoPlayer = (id: string): returnHookProps => {
  const history = useHistory();
  const [isPlaying, setPlayingState] = useState<boolean>(false);
  const [isVideoLoad, setVideoLoadState] = useState<boolean>(false);
  const [isFullScreen, setFullScreenState] = useState<boolean>(false);
  const playerRef = useRef<HTMLVideoElement>(null);
  const [currentFilmTime, setCurrentFilmTimeState] = useState<string>('0:00:00');
  const [currentFilmTimeInPercent, setCurrentFilmTimeInPercentState] = useState<number>(0);

  const onClickPlayButtonHandler = async (evt: SyntheticEvent): Promise<void> => {
    if (playerRef.current) {
      setPlayingState(true);
      setVideoLoadState(true);
      const target = evt.target as HTMLInputElement;
      target.disabled = true;
      await playerRef.current.play();
      target.disabled = false;
      setVideoLoadState(false);
    }
  };
  const onClickPauseButtonHandler = (evt: SyntheticEvent): void => {
    if (playerRef.current) {
      setPlayingState(false);
      const target = evt.target as HTMLInputElement;
      target.disabled = true;
      playerRef.current.pause();
      target.disabled = false;
    }
  };
  const onClickFullScreenButtonHandler = async (): Promise<void> => {
    if (isFullScreen && document.exitFullscreen) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }

    setFullScreenState(!isFullScreen);
  };
  const onCLickExitButtonHandler = (): void => {
    history.push(Path.FILMS.replace(':id', id));
  };
  const onPlayingVideoHandler = (): void => {
    if (playerRef.current) {
      const {currentTime, duration} = playerRef.current;
      setCurrentFilmTimeInPercentState(currentTime / duration * 100);
      if (!(isNaN(currentTime) || isNaN(duration))) {
        setCurrentFilmTimeState(
          dayjs
            .duration(duration - currentTime, 'seconds')
            .format(`${(duration - currentTime) > ONE_HOUR_IN_SECONDS ? '-H:mm:ss' : '-mm:ss'}`)
        );
      }
    }
  };

  useEffect(() => {
    dayjs.extend(duration);
  }, []);

  return {
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
  };
};
