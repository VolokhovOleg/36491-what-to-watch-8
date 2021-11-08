import {InlineStyleType} from '../index';
import {RatingInWord} from '../../consts';
export type Film = {
  title: string,
  imageSrc: string,
  posterSrc: string,
  bgImage: string,
  bgColor: string,
  description: string,
  rating: number,
  score: number,
  director: string,
  runTime: string,
  genre: string,
  release: number,
  id: number,
  isFavorite: boolean,
  trailerSrc: string,
  videoSrc: string,
  isActive: boolean,
  starring: string[],
  lvl: RatingInWord | null,
  value: string,
};
export type Films = Film[] | [];
export type RawFilm = {
  name: string,
  ['poster_image']: string,
  ['preview_image']: string,
  ['background_image']: string,
  ['background_color']: string,
  description: string,
  rating: number,
  ['scores_count']: number,
  director: string,
  ['run_time']: string,
  genre: string,
  release: number,
  id: number,
  ['is_favorite']: boolean,
  ['preview_video_link']: string,
  ['video_link']: string,
  starring: string[],
  released: number,
};
export type Review = {
  text: string,
  author: string,
  date: string,
  rate: string,
  id: number | string,
};
export type FilmCardVideoPlayerConfigType = {
  autoPlay: boolean,
  muted: boolean,
  width: string,
  style: InlineStyleType
};
