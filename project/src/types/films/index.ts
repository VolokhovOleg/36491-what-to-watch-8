import {InlineStyleType} from '../index';

export type Film = {
  imageSrc: string,
  title: string,
  genre: string,
  release: string,
  trailerSrc: string,
  isActive: boolean,
  value: string,
  starring: string,
  director: string,
  description: string,
  score: string,
  lvl: string,
  rating: number,
  runTime: string,
  id: number,
}
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
