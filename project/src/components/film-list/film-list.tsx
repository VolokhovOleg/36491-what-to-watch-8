import {Film as FilmType} from '../../moks/films';
import FilmItem from '../film-item/film-item';

type Props = {
  films: FilmType[]
};

function FilmList({films}: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films.map((item: FilmType) => {
          const {imageSrc, title, trailerSrc, id} = item;

          return (
            <FilmItem
              imageSrc={imageSrc}
              title={title}
              trailerSrc={trailerSrc}
              id={id}
              key={id}
            />
          );
        })
      }
    </div>
  );
}

export default FilmList;
