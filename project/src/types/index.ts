import {BaseSyntheticEvent} from 'react';
import {setActiveGenre, setFilteredFilmsFromGenre} from '../store/action';
import {Film} from '../moks/films';

export enum Path {
  MAIN = '/',
  LOGIN = '/login',
  FILMS = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
  MY_LIST = '/mylist',
}
export enum TabsType {
  FILM_CARD = 'FILM_CARD',
  GENRE = 'GENRE',
}
export enum TabNameType {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}
export type TabsNameHandlerType = string;
export type InlineStyleType = {[key: string]: string | number};
export type RouteParams = {
  id: string
};
export type FilmCardVideoPlayerConfigType = {
  autoPlay: boolean,
  muted: boolean,
  width: string,
  style: InlineStyleType
};
export type onChangeTabsHandlerType = (tabNameType: TabNameType | TabsNameHandlerType) => void;
export type tabsType = {
  onActiveChange: (evt: BaseSyntheticEvent, handler: onChangeTabsHandlerType, tabsNames: TabsNames) => void,
  activeTab: string,
};
export type TabsNames = readonly string[] | string[];
export enum ActionType {
  SetActiveGenre = 'SET_ACTIVE_GENRE',
  SetFilteredFilmsFromGenre = 'SET_FILTERED_FIL_FROM_GENRE',
}
export type Actions =
    | ReturnType<typeof setActiveGenre>
    | ReturnType<typeof setFilteredFilmsFromGenre>

export type State = {
  films: Film[],
  filteredFilmFromGenre: Film[] | [],
  genre: string,
};
