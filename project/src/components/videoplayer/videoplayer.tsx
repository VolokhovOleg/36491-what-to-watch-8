import {useRef} from 'react';
import {FilmCardVideoPlayerConfigType} from '../../types';
import {Film} from '../../moks/films';

type Props = {
  playerConfig: FilmCardVideoPlayerConfigType
} & Pick<Film, 'imageSrc' | 'trailerSrc'>;

function VideoPlayer({trailerSrc, imageSrc, playerConfig}: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={trailerSrc}
      poster={imageSrc}
      {...playerConfig}
    >
      <source src={trailerSrc} type="video/webm"  />
    </video>
  );
}

export default VideoPlayer;