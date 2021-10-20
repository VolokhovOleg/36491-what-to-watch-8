import {onChangeTabsHandlerType, TabsNames, tabsType} from '../../types';
import withTabs from '../../hocs/withTabs';
import {SyntheticEvent} from 'react';

type Props = JSX.IntrinsicAttributes & tabsType & {onChangeTabHandler: onChangeTabsHandlerType, tabsNames: TabsNames};

function GenreTabs(props: Props): JSX.Element {
  const onClickTabsHandler = (evt: SyntheticEvent): void => {
    props.onActiveChange(evt, props.onChangeTabHandler, props.tabsNames);
  };

  return (
    <ul className="catalog__genres-list">
      {
        props.tabsNames.map((item: string, index) => (
          <li
            onClick={onClickTabsHandler}
            key={item}
            className={`catalog__genres-item ${props.activeTab === index.toString() ? 'catalog__genres-item--active' : ''}`}
          >
            <a data-id={index.toString()} className="catalog__genres-link">{item}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default withTabs(GenreTabs);
