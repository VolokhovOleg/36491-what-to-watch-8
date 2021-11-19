import {useEffect, useState} from 'react';
import {useMyList} from './useMyList';
import {useParams} from 'react-router';
import {RouteParams} from '../../types/route';

type returnHookProps = {
  inMyList: boolean,
};

export const useCheckFilmInMyList = (): returnHookProps => {
  const {id} = useParams<RouteParams>();
  const [inMyList, setMyListState] = useState<boolean>(false);
  const {films} = useMyList();

  useEffect(() => {
    setMyListState(Boolean(films.find(item => item.id.toString() === id)?.isFavorite));
  }, [id, films]);

  return {inMyList};
};
