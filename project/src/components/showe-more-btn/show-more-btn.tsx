type Props = {
  handler: () => void
}

function ShowMoreBtn({handler}: Props): JSX.Element {
  const onClickHandler = (): void => {
    handler();
  };

  return (
    <div className="catalog__more">
      <button onClick={onClickHandler} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreBtn;
