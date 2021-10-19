import {FILM_DETAILS_TAB_NAMES} from '../../consts';
import withTabs from '../../hocs/withTabs';
import {onChangeTabsHandlerType, tabsType} from '../../types';
import {SyntheticEvent} from 'react';

type Props = JSX.IntrinsicAttributes & tabsType & {onChangeTabHandler: onChangeTabsHandlerType};

function FilmDetailsTabs(props: Props): JSX.Element {
  const onClickTabsHandler = (evt: SyntheticEvent): void => {
    props.onActiveChange(evt, props.onChangeTabHandler);
  };

  return (
    <ul className="film-nav__list">
      {
        FILM_DETAILS_TAB_NAMES.map((item: string, index) => (
          <li
            onClick={onClickTabsHandler}
            key={item}
            className={`film-nav__item ${props.activeTab === index.toString() ? 'film-nav__item--active' : ''}`}
          >
            <a data-id={index.toString()} className="film-nav__link">{item}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default withTabs(FilmDetailsTabs);
