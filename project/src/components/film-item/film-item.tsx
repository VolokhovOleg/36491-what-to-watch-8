import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../moks/films';

type Props = Partial<Film>;

function FilmItem({imageSrc, title, id}: Props): JSX.Element {
  const [, setActiveState] = useState<boolean>(false);
  const onMouseOverFilmHandler = (): void => {
    setActiveState(true);
  };
  const onMouseLeaveFilmHandler = (): void => {
    setActiveState(false);
  };

  return (
    <article
      onMouseOver={onMouseOverFilmHandler}
      onMouseLeave={onMouseLeaveFilmHandler}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={imageSrc} alt={title} width={280} height={175}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className={'small-film-card__link'} to={`film/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmItem;
