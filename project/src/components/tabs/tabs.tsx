import {onChangeTabsHandlerType, TabsNames, TabsType} from '../../types';
import FilmDetailsTabs from '../film-details-tabs/film-details-tabs';
import GenreTabs from '../genre-tabs/genre-tabs';

type Props = { type: TabsType, onChangeTabHandler: onChangeTabsHandlerType, tabsNames: TabsNames};

function Tabs({type, tabsNames, onChangeTabHandler}: Props): JSX.Element {
  const pickTabs = (tabsType: TabsType): JSX.Element | null => {
    switch (tabsType) {
      case TabsType.FILM_CARD:
        return <FilmDetailsTabs onChangeTabHandler={onChangeTabHandler} tabsNames={tabsNames}/>;
      case TabsType.GENRE:
        return <GenreTabs onChangeTabHandler={onChangeTabHandler} tabsNames={tabsNames}/>;
      default:
        return null;
    }
  };

  return (
    <>
      {
        pickTabs(type)
      }
    </>
  );
}

export default Tabs;
