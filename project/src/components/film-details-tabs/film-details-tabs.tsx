import withTabs from '../../hocs/withTabs';
import {onChangeTabsHandlerType, TabsNames, tabsType} from '../../types/tabs';
import {SyntheticEvent} from 'react';

type Props = JSX.IntrinsicAttributes & tabsType & {onChangeTabHandler: onChangeTabsHandlerType, tabsNames: TabsNames};

function FilmDetailsTabs(props: Props): JSX.Element {
  const onClickTabsHandler = (evt: SyntheticEvent): void => {
    props.onActiveChange(evt, props.onChangeTabHandler, props.tabsNames);
  };

  return (
    <ul className="film-nav__list">
      {
        props.tabsNames.map((item: string, index) => (
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
