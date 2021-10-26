import {useRef} from 'react';
import {FilmCardVideoPlayerConfigType, Film} from '../../types/films';

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
      <source src={trailerSrc} type="video/mp4"  />
    </video>
  );
}

export default VideoPlayer;
