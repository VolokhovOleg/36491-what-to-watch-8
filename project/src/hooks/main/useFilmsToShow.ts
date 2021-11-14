import {STEP_FILM_AMOUNT} from '../../consts';
import {Dispatch, SetStateAction, useState} from 'react';

type returnHookProps = {
  onClickShowMoreBtnHandler: () => void,
  filmAmountToShow: number,
  setFilmAmountToShowState: Dispatch<SetStateAction<number>>,
};

export const useFilmsToShow = (): returnHookProps => {
  const [filmAmountToShow, setFilmAmountToShowState] = useState<number>(STEP_FILM_AMOUNT);

  const onClickShowMoreBtnHandler = () => {
    setFilmAmountToShowState(filmAmountToShow + STEP_FILM_AMOUNT);
  };

  return {onClickShowMoreBtnHandler, filmAmountToShow, setFilmAmountToShowState};
};
