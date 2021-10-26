import {BaseSyntheticEvent} from 'react';

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
export type onChangeTabsHandlerType = (tabNameType: TabNameType | TabsNameHandlerType) => void;
export type tabsType = {
  onActiveChange: (evt: BaseSyntheticEvent, handler: onChangeTabsHandlerType, tabsNames: TabsNames) => void,
  activeTab: string,
};
export type TabsNames = readonly string[] | string[];
