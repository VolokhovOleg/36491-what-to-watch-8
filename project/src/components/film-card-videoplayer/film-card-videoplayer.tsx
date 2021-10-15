import VideoPlayer from '../videoplayer/videoplayer';
import {Film} from '../../moks/films';
import {FilmCardVideoPlayerConfigType} from '../../types';

type Props = JSX.IntrinsicAttributes & Pick<Film, 'imageSrc' | 'trailerSrc'>;

function FilmCardVideoPlayer(props: Props): JSX.Element {
  const playerConfig: FilmCardVideoPlayerConfigType = {
    autoPlay: true,
    muted: true,
    width: '100%',
    style: {
      transform: 'scale(1.2)',
    },
  };
  return (
    <VideoPlayer
      {...props}
      playerConfig={playerConfig}
    />
  );
}

export default FilmCardVideoPlayer;
