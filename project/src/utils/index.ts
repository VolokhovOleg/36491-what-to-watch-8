import {RatingInWord, reviewLength} from '../consts';

export const convertRating = (rating: number): RatingInWord | null => {
  switch (true) {
    case (rating >= 0) && (rating < 3):
      return RatingInWord.BAD;
    case (rating >= 3) && (rating < 5):
      return RatingInWord.NORMAL;
    case (rating >= 5) && (rating < 8):
      return RatingInWord.GOOD;
    case (rating >= 8) && (rating < 10):
      return RatingInWord.VERY_GOOD;
    case rating >= 10:
      return RatingInWord.AWESOME;
    default:
      return null;
  }
};

export const convertToPercentFromNumber = (number: number, fromNumber = 10): number => number * fromNumber / 100;
export const checkPostSize = (size: number): boolean => size < reviewLength.MIN || size >= reviewLength.MAX;
