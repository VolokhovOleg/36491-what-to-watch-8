import {RefObject, SyntheticEvent, useRef, useState} from 'react';
import {postComments} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

type returnHookProps = {
  formFieldset: RefObject<HTMLFieldSetElement>,
  textAreaRef: RefObject<HTMLTextAreaElement>,
  commentValue: string,
  ratingValue: number,
  onChangeTextAreaHandler: () => void,
  onSubmitFormHandler: (evt: SyntheticEvent) => void,
  onChangeHandler: (evt: SyntheticEvent) => void,
};

export const useCommentsForm = (id: string): returnHookProps => {
  const dispatch = useDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const formFieldset = useRef<HTMLFieldSetElement>(null);
  const [commentValue, setCommentState] = useState<string>('');
  const [ratingValue, setRatingState] = useState<number>(0);

  const onChangeTextAreaHandler = (): void => {
    if (textAreaRef.current) {
      setCommentState(textAreaRef.current.value);
    }
  };
  const onSubmitFormHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(postComments(id, {rating: ratingValue, comment: commentValue}));
  };
  const onChangeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement;
    setRatingState(parseInt(target.value, 10));
  };

  return {
    formFieldset,
    textAreaRef,
    commentValue,
    ratingValue,
    onChangeTextAreaHandler,
    onSubmitFormHandler,
    onChangeHandler
  };
};
