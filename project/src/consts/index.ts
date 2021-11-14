import {TabNameType} from '../types/tabs';

export const DELAY_TO_PLAY_VIDEO = 1000;
export const STEP_FILM_AMOUNT = 8;
export const ALL_GENRES = 'All genres';
export const AUTH_TOKEN_KEY_NAME = 'wtw-token';
export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const reviewLength = {
  MIN: 50,
  MAX: 400,
} as const;
export const FILM_DETAILS_TAB_NAMES = [TabNameType.OVERVIEW, TabNameType.DETAILS, TabNameType.REVIEWS] as const;
export enum RatingInWord {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome',
}
export enum HeaderType {
  DEFAULT = 'DEFAULT',
  SIGN_IN = 'SIGN_IN',
  MY_LIST = 'MY_LIST',
}
