import {Film, RawFilm} from '../../types/films';
import {convertRating, convertToPercentFromNumber} from '../../utils';

export const parseFilm = (film: RawFilm): Film => {
  const {
    name,
    description,
    rating,
    director,
    genre,
    released,
    id,
    starring,
  } = film;

  return {
    title: name,
    imageSrc: film['preview_image'],
    posterSrc: film['poster_image'],
    bgImage: film['background_image'],
    bgColor: film['background_color'],
    description,
    rating,
    score: film['scores_count'],
    director,
    runTime: film['run_time'],
    genre,
    release: released,
    id,
    isFavorite: film['is_favorite'],
    trailerSrc: film['preview_video_link'],
    videoSrc: film['video_link'],
    isActive: false,
    starring,
    lvl: convertRating(rating),
    value: `${convertToPercentFromNumber(rating)}`,
  };
};
export const parseFilms = (rawFilm: RawFilm[]): Film[]  => rawFilm.map((item) => parseFilm(item));
