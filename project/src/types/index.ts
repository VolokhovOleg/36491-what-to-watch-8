import {BaseSyntheticEvent} from 'react';

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
  MAIN = 'MAIN',
}
export enum TabNameType {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}
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
export type onChangeTabsHandlerType = (tabNameType: TabNameType) => void;
export type tabsType = {
  onActiveChange: (evt: BaseSyntheticEvent, handler: onChangeTabsHandlerType) => void,
  activeTab: string,
};
