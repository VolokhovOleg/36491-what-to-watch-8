import {MouseEventHandler} from 'react';

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
export type tabsType = { onActiveChange: MouseEventHandler<HTMLLIElement>; activeTab: string};
